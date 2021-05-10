import link from "next/link";
import { useEffect, useState } from "react";

import useSWR from "swr";

export default function LastSalesPage() {
  const [sales, setSales] = useState([]);
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

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://descartable-server-default-rtdb.firebaseio.com/sales.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         const transformSales = [];
  //         for (const key in data) {
  //           transformSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }
  //         console.log("Trasform sales: ");
  //         console.log(transformSales);
  //         setSales(transformSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (error) {
    return <p>failed to load</p>;
  }
  if (!data || !sales) {
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
