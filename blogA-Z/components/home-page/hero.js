import Image from "next/image";
import classes from "./hero.module.css";
import React from "react";

export default function hero() {
  return (
    <section className={classess.hero}>
      <div className={classess.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am max</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
}
