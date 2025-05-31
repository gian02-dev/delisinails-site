import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  voidBack: boolean;
}

function ButtonGreen({ text, voidBack }: ButtonProps) {
  return (
    <>
      {voidBack === true ? (
        <button className={styles.ButtonVoid}>{text}</button>
      ) : (
        <button className={styles.Button}>{text}</button>
      )}
    </>
  );
}

export default ButtonGreen;
