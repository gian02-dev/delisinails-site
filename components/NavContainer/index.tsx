import React, { Component } from "react";
import styles from "./styles.module.scss";
import ButtonGreen from "../Buttons/ButtonGreen";
import { useState, useEffect } from "react";

interface NavContainerProps {
  element: { titolo: string }[];
}

function NavContainer({ element }: NavContainerProps) {
  const [selectedButton, setSelectedButton] = useState(0);

  function clickEvent(num: number) {
    console.log(num);
    setSelectedButton(num);
  }

  useEffect(() => {}, [selectedButton]);
  return (
    <>
      <div className={styles.NavContainer}>
        <div className={styles.NavButtons}>
          {element.map(function (e, i) {
            let active = true;
            if (i === selectedButton) {
              active = false;
            } else {
              active = true;
            }
            return (
              <ButtonGreen
                text={e.titolo}
                voidBack={active}
                click={clickEvent}
                key={i}
                num={i} //definisce il numero del bottone, che serve per poter chiamare la funzione clickEvent(num) con il proprio bottone
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NavContainer;
