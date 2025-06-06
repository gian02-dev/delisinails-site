import React from "react";
import styles from "./styles.module.scss";

interface BackgroundProps {
  src: string;
}

function Background({ src }: BackgroundProps) {
  return (
    <>
      <div className={styles.Background}>
        <a href="/">
          <img src={src} alt="ALESSIA DE LISI" />
        </a>
      </div>
    </>
  );
}

export default Background;
