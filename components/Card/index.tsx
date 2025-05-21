import React from "react";
import styles from "./styles.module.scss";
import Button from "../Button";

interface CardProps {
  title: string;
  image: string;
  text: string;
  button: boolean;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  text,
  button,
  buttonText,
}) => {
  return (
    <>
      {button === true ? (
        <div className={styles.Card}>
          <div className={styles.title}>{title}</div>
          <div className={styles.image}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.text}>{text}</div>
          <Button text={buttonText} />
        </div>
      ) : (
        <div className={styles.Card}>
          <div className={styles.title}>{title}</div>
          <div className={styles.image}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      )}
    </>
  );
};

export default Card;
