import React from "react";
import styles from "./card.module.scss";
import ButtonCard from "@/components/Buttons/ButtonCard";
import { useState } from "react";
import { Span } from "next/dist/trace";

interface CardProps {
  title: string;
  image: string;
  text: string;
  button: boolean;
  buttonText: string;
}

function Card({ title, image, text, button, buttonText }: CardProps) {
  let text2 = "";
  let text3 = "";
  let ids = 0;

  function clickButton() {
    if (selectedRead === false) {
      setSelectedRead(true);
    } else if (selectedRead === true) {
      setSelectedRead(false);
    }
  }

  const [selectedRead, setSelectedRead] = useState(true);

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
              <span>{text2}</span>
              <span
                className={
                  selectedRead === false ? styles.text : styles.textHide
                }
              >
                {text3}
              </span>
              {text.length > 200 ? (
                <button
                  className={styles.readMore}
                  onClick={() => clickButton()}
                >
                  {selectedRead === false ? (
                    <>...Leggi meno</>
                  ) : (
                    <>...Leggi ancora</>
                  )}
                </button>
              ) : (
                <></>
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
