import React from "react";
import styles from "./styles.module.scss";

interface BackgroundProps {
  src: string;
}

function Header({ src }: BackgroundProps) {
  return (
    <>
      <div className={styles.Header}>
        <a href="/">
          <img src={src} alt="ALESSIA DE LISI" />
        </a>
      </div>
    </>
  );
}

export default Header;
