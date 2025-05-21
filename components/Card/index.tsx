import React from "react";
import styles from "./styles.module.scss";

function Card() {
  return (
    <>
      <div className={styles.Card}>
        <div className={styles.title}></div>
        <div className={styles.image}></div>
      </div>
    </>
  );
}

export default Card;
