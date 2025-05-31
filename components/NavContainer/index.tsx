import React, { Component } from "react";
import styles from "./styles.module.scss";
import Button from "../Buttons/Button";

interface NavContainerProps {
  element: { titolo: string }[];
}

function NavContainer({ element }: NavContainerProps) {
  return (
    <>
      <div className={styles.NavContainer}>
        <div className={styles.NavButtons}>
          {element.map(function (e, i) {
            return <Button text={e.titolo} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default NavContainer;
