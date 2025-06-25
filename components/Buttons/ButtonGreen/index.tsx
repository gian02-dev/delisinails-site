import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  voidBack: boolean;
  click: (num: number) => void; //funzione PROPS
  num: number;
}

function ButtonGreen({ text, voidBack, click, num }: ButtonProps) {
  return (
    <>
      {voidBack === true ? (
        <button onClick={() => click(num)} className={styles.ButtonVoid}>
          {text}
        </button>
      ) : (
        <button onClick={() => click(num)} className={styles.Button}>
          {text}
        </button>
      )}
    </>
  );
}

export default ButtonGreen;
