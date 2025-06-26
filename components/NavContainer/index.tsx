import React, { Component } from "react";
import styles from "./styles.module.scss";
import ButtonGreen from "../Buttons/ButtonGreen";
import { useState, useEffect } from "react";

interface NavContainerProps {
  element: { titolo: string }[];
}

function NavContainer({ element }: NavContainerProps) {
  const [selectedButton, setSelectedButton] = useState(0);

  function clickEvent(id: number) {
    console.log(id);
    setSelectedButton(id);
  }

  //   useEffect(() => {}, [selectedButton]);
  return (
    <>
      <div className={styles.NavContainer}>
        <div className={styles.NavButtons}>
          {element.map(function (e, i) {
            return (
              //bottoni NAV
              <ButtonGreen
                text={e.titolo}
                voidBack={true}
                click={clickEvent}
                key={i}
                id={i} //definisce il numero del bottone, che serve per poter chiamare la funzione clickEvent(id) con il proprio bottone
                useState={selectedButton}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NavContainer;
