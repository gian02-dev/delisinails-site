import React from "react";
import styles from "./card.module.scss";
import ButtonCard from "@/components/Buttons/ButtonCard";
import { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface CardProps {
  title: string;
  image: string[];
  text: string;
  button: boolean;
  buttonText: string;
}

function Card({ title, image, text, button, buttonText }: CardProps) {
  let text2 = "";
  let text3 = "";
  let lunghezza = 220;

  function clickButton() {
    if (selectedRead === false) {
      setSelectedRead(true);
    } else if (selectedRead === true) {
      setSelectedRead(false);
    }
  }

  const [selectedRead, setSelectedRead] = useState(true);

  if (text.length > lunghezza) {
    for (let i = 0; i < lunghezza; i++) {
      text2 = text2 + text.charAt(i);
    }
    for (let i = lunghezza; i <= text.length; i++) {
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
            {image.length > 1 ? (
              <Fade duration={2000}>
                {image.map((each, index) => (
                  <img key={index} style={{ width: "100%" }} src={each} />
                ))}
              </Fade>
            ) : (
              <img src={image[0]} alt={"IMAGE"} />
            )}
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
              {text.length > lunghezza ? (
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
            <img src={image[0]} alt={title} />
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
