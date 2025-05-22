import React from "react";
import styles from "./styles.module.scss";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <>
      <button className={styles.Button}>{text}</button>
    </>
  );
};

export default Button;
