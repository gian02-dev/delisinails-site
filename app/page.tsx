"use client"; // This is a client component

import styles from "./styles.module.scss";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.logo}>
          <img src="/profile.png" alt="FOTO ALESSIA" />
        </div>
        <div className={styles.text}>
          <p>
            Mi chiamo Alessia, sono di Palermo, ho 21 anni e da oltre 5 anni
            coltivo con passione l’amore per il mondo Nails. Il mio obiettivo
            non è solo valorizzare l’estetica delle mani, ma{" "}
            <b>prendermi cura della salute delle unghie</b>, sempre al primo
            posto.
          </p>
          <p>
            Ho frequentato diversi corsi formativi con Master italiane e
            un’accademia specializzata che mi ha permesso di perfezionare la
            tecnica. Attualmente continuo il mio percorso di crescita
            professionale presso <b>AC Wilde School</b>, con il sogno di aprire
            un giorno la mia <b>accademia nails</b>.
          </p>
          <p>
            Nel mio studio troverai un ambiente accogliente,{" "}
            <b>strumenti sempre sterilizzati</b> e una pulizia impeccabile,
            perché professionalità e igiene per me sono fondamentali.
          </p>
          <div className={styles.Space}></div>
          <a href="/trattamenti">
            <Button text="I MIEI TRATTAMENTI" />
          </a>
        </div>
      </div>
    </>
  );
}
