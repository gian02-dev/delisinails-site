import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
  voidBack: boolean;
  click: (num: number) => void; //funzione PROPS
  id: number;
  idSetOnClick: number; //id secondario utilizzato normalmente
  // per ricevere il valore di uno state, fare il confronto con l'id normale e settare il voidback
}

function ButtonGreen({ text, voidBack, click, id, idSetOnClick }: ButtonProps) {
  //settaggio del voidBack in caso l'id corrisponde
  if (idSetOnClick === id) {
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
