import React, { Component } from "react";
import styles from "./navcontainer.module.scss";
import ButtonGreen from "../Buttons/ButtonGreen";
import { useState } from "react";
import ContentContainer from "./ContentContainer";

interface NavContainerProps {
  element: { titolo: string; content: string }[];
}

function NavContainer({ element }: NavContainerProps) {
  const [selectedButton, setSelectedButton] = useState(0);

  function clickEvent(id: number) {
    console.log(id);
    setSelectedButton(id);
  }

  //   useEffect(() => {}, [selectedButton]);
  return (
    <div className={styles.NavContainer}>
      <div className={styles.NavButtons}>
        {element.map(function (e, i) {
          return (
            <div key={i}>
              <ButtonGreen //bottoni NAV
                text={e.titolo}
                voidBack={true}
                click={clickEvent}
                id={i} //definisce il numero del bottone, che serve per poter chiamare la funzione clickEvent(id) con il proprio bottone
                idSetOnClick={selectedButton}
                key={e.titolo}
              />
              <ContentContainer
                content={e.content}
                id={i}
                useState={selectedButton}
                key={e.content}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavContainer;
