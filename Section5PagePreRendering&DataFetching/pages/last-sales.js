import link from "next/link";
import { useEffect, useState } from "react";

import useSWR from "swr";

export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://descartable-server-default-rtdb.firebaseio.com/sales.json"
  );

  useEffect(() => {
    const transformSales = [];
    if (data) {
      for (const key in data) {
        transformSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformSales);
    }
  }, [data]);

  if (error) {
    return <p>failed to load</p>;
  }
  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://descartable-server-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();
  console.log(data);
  const transformSales = [];
  for (const key in data) {
    transformSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      sales: transformSales,
    },
    revalidate: 10,
  };
}
