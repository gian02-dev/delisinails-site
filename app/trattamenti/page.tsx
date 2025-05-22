import React from "react";
import Card from "@/components/Card";
import styles from "./styles.module.scss";

function Trattamenti() {
  return (
    <>
      <div className={styles.Trattamenti}>
        <Card
          title="RICOSTRUZIONE"
          image="/french/1.JPG"
          text="La ricostruzione unghie è un vero e proprio allungamento dell’unghia naturale, realizzato tramite l’utilizzo delle nail form, per ottenere una forma armoniosa e resistente."
          button={true}
          buttonText="CONTATTAMI"
        />
      </div>
    </>
  );
}

export default Trattamenti;
