import link from "next/link";
import { useEffect, useState } from "react";

export default function LastSalesPage() {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://descartable-server-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
        const transformSales = [];
        for (const key in data) {
          transformSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        console.log("Trasform sales: " );
        console.log(transformSales)
        setSales(transformSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No Data Yet</p>;
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
