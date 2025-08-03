"use client"; // This is a client component

import React from "react";
import Card from "@/components/Card";
import CardsList from "@/data/Cards/CardsList";
import styles from "./trattamenti.module.scss";

function Trattamenti() {
  return (
    <>
      <div className={styles.Trattamenti}>
        {/* funzione che genera i bottoni navbar con il database dell'oggetto ButtonNavList */}
        {CardsList.map(function (e, i) {
          return (
            <Card
              title={e.titolo}
              image={e.immagine}
              text={e.testo}
              button={e.buttonYes}
              buttonText={e.testoButton}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
}

export default Trattamenti;
