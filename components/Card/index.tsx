import React from "react";
import styles from "./card.module.scss";
import ButtonCard from "@/components/Buttons/ButtonCard";

interface CardProps {
  title: string;
  image: string;
  text: string;
  button: boolean;
  buttonText: string;
}

function Card({ title, image, text, button, buttonText }: CardProps) {
  return (
    <>
      {button === true ? (
        <div className={styles.Card}>
          <div className={styles.image}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.textContent}>
            <div className={styles.title}>
              <span>{title}</span>
            </div>
            <div className={styles.text}>
              <span>{text}</span>
            </div>
          </div>
          <ButtonCard text={buttonText} />
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
}

export default Card;
