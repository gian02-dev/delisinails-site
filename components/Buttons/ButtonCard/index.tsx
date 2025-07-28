import React from "react";
import styles from "./buttoncard.module.scss";

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <>
      <button className={styles.Button}>{text}</button>
    </>
  );
}

export default Button;
