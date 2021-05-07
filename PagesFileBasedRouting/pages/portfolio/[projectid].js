import React from "react";
import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  // Send a request to some backend server
  // To fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>The Porfolio Project Mage</h1>
    </div>
  );
}
