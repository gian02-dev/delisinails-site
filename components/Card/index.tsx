import React from "react";
import styles from "./card.module.scss";
import ButtonCard from "@/components/Buttons/ButtonCard";
import { useState } from "react";

interface CardProps {
  title: string;
  image: string;
  text: string;
  button: boolean;
  buttonText: string;
  id: number;
  idSetOnClick: number; //id secondario utilizzato normalmente
  click: (value: number) => void; //funzione PROPS
}

function Card({
  title,
  image,
  text,
  button,
  buttonText,
  id,
  idSetOnClick,
  click,
}: CardProps) {
  let text2 = "";
  let text3 = "";
  let ids = 0;

  function clickButton(id: number) {
    setSelectedRead(id);
    click(id);
  }

  function clickButton2(id: number) {
    setSelectedRead(id);
    click(id);
  }

  const [selectedRead, setSelectedRead] = useState(0);

  if (text.length > 200) {
    for (let i = 0; i < 200; i++) {
      text2 = text2 + text.charAt(i);
    }
    for (let i = 200; i <= text.length; i++) {
      text3 = text3 + text.charAt(i);
    }
  } else {
    text2 = text;
  }
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
              {text3 != "" ? (
                <span>
                  {text2}
                  {id != idSetOnClick && id != selectedRead ? (
                    <button
                      className={styles.readMore}
                      onClick={() => clickButton(id)}
                    >
                      ...Leggi ancora
                    </button>
                  ) : (
                    <span>
                      {text3}{" "}
                      <button
                        className={styles.readMore}
                        onClick={() => clickButton2(0)}
                      >
                        ...Leggi meno
                      </button>
                    </span>
                  )}
                </span>
              ) : (
                <span>{text2}</span>
              )}
            </div>
          </div>
          <ButtonCard text={buttonText} />
        </div>
      ) : (
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
        </div>
      )}
    </>
  );
}

export default Card;
