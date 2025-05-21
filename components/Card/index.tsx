import React from "react";
import styles from "./styles.module.scss";
import Button from "../Button";

interface CardProps {
  image: string;
  title: string;
  text: string;
  button: boolean;
}

const Card: React.FC<CardProps> = ({ image, title, text, button }) => {
  return (
    <>
      {button === true ? (
        <div className={styles.Card}>
          <div className={styles.title}></div>
          <div className={styles.image}></div>
          <div className={styles.text}></div>
          <Button text="CLICCA QUI" />
        </div>
      ) : (
        <div className={styles.Card}>
          <div className={styles.title}></div>
          <div className={styles.image}></div>
          <div className={styles.text}></div>
        </div>
      )}
    </>
  );
};

export default Card;
