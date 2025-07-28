import React from "react";
import styles from "./buttonnav.module.scss";

interface ButtonNavProps {
  text: string;
  active: number;
}

function ButtonNav({ text, active }: ButtonNavProps) {
  return (
    <>
      {/* funzione che genera il bottone se in active (stessa path) oppure non in active (path diversa) */}
      {active === 0 ? (
        <div className={styles.ButtonNav}>
          {text}
          <div className={styles.lineBottom}></div>
        </div>
      ) : (
        <div className={styles.ButtonNavActive}>{text}</div>
      )}
    </>
  );
}

export default ButtonNav;
