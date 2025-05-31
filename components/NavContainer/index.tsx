import React, { Component } from "react";
import styles from "./styles.module.scss";
import ButtonGreen from "../Buttons/ButtonGreen";

interface NavContainerProps {
  element: { titolo: string }[];
}

function NavContainer({ element }: NavContainerProps) {
  return (
    <>
      <div className={styles.NavContainer}>
        <div className={styles.NavButtons}>
          {element.map(function (e, i) {
            return <ButtonGreen text={e.titolo} voidBack={true} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default NavContainer;
