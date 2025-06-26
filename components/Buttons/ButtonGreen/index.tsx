import React from "react";
import styles from "./styles.module.scss";
import { useState } from "react";

interface ButtonProps {
  text: string;
  voidBack: boolean;
  click: (num: number) => void; //funzione PROPS
  id: number;
  id2: number;
}

function ButtonGreen({ text, voidBack, click, id, id2 }: ButtonProps) {
  var style;
  //settaggio del voidBack in caso l'id corrisponde
  if (id2 === id) {
    voidBack = false;
  } else {
    voidBack = true;
  }
  return (
    <>
      <button
        onClick={() => click(id)}
        className={voidBack ? styles.ButtonVoid : styles.Button}
        key={text}
      >
        {text}
      </button>
    </>
  );
}

export default ButtonGreen;
