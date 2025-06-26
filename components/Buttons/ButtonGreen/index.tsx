import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  voidBack: boolean;
  click: (num: number) => void; //funzione PROPS
  id: number;
  useState: number;
}

function ButtonGreen({ text, voidBack, click, id, useState }: ButtonProps) {
  //settaggio del voidBack in caso l'id corrisponde
  if (useState === id && useState != 999) {
    voidBack = false;
  }
  return (
    <>
      {voidBack === true ? (
        <button onClick={() => click(id)} className={styles.ButtonVoid}>
          {text}
        </button>
      ) : (
        <button onClick={() => click(id)} className={styles.Button}>
          {text}
        </button>
      )}
    </>
  );
}

export default ButtonGreen;
