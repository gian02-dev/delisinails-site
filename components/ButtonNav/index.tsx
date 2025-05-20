import React from "react";
import styles from "./styles.module.scss";

interface ButtonNavProps {
  text: string;
  active: number;
}

const ButtonNav: React.FC<ButtonNavProps> = ({ text, active }) => {
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
};

export default ButtonNav;
