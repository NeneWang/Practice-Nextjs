import { useEffect, useState } from "react";

export default function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoad] = useState(false);

  useEffect(() => {
    fetch("https://descartable-server-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {});
  }, []);
  return <ul></ul>;
}
