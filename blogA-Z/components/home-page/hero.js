import classes from "./hero.module.css";
import React from "react";

export default function hero() {
  return (
    <section className= {classess.hero}>
      <div className={classess.image}>Image</div>
      <h1>Hi, I am max</h1>
      <p  >
        I blog about web development - especially frontend frameworks like
        Angular or React
      </p>
    </section>
  );
}
