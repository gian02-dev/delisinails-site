"use client"; // This is a client component

import styles from "./styles.module.scss";
import ButtonGreen from "@/components/Buttons/ButtonGreen";
import NavContainer from "@/components/NavContainer";

export const TitlesContainerList = [
  {
    titolo: "CHI SONO",
  },
  {
    titolo: "PERCHÉ IO",
  },
  {
    titolo: "FORMAZIONE",
  },
];

export default function Home() {
  return (
    <>
      <NavContainer element={TitlesContainerList} />
      <div className={styles.home}>
        <div className={styles.logo}>
          <a href="/">
            <img src="/profile.png" alt="FOTO ALESSIA" />
          </a>
        </div>
        <div className={styles.text}>
          <b className={styles.Title}>
            Piacere, sono Alessia, la tua Nail Artist a Palermo
          </b>
          <p>
            Da oltre cinque anni trasformo la cura delle mani in un’esperienza
            di bellezza e benessere, fondendo creatività, tecnica e attenzione
            alla salute naturale dell’unghia.
          </p>
          <div className={styles.Space}></div>
          <b className={styles.Title}>Perché affidarti a me?</b>
          <ul>
            <li>
              <b>• Formazione d’eccellenza</b>
              <p>
                Ho conseguito certificazioni con le migliori Master italiane e
                continuo a perfezionare le mie competenze presso{" "}
                <b>AC Wilde School</b>, con l’obiettivo un giorno di fondare la
                mia accademia Nails.
              </p>
            </li>
            <div className={styles.Space}></div>
            <li>
              <b>• Salute prima di tutto</b>
              <p>
                Ogni trattamento è progettato per valorizzare l’estetica
                rispettando la fisiologia dell’unghia, dal semplice Manicure Spa
                alle più sofisticate strutture in Gel.
              </p>
            </li>
            <div className={styles.Space}></div>
            <li>
              <b>• Igiene certificata</b>{" "}
              <p>
                Strumenti sterilizzati e postazione sanificata a ogni cliente:
                la sicurezza è un impegno, non un optional.
              </p>
            </li>
            <div className={styles.Space}></div>
            <li>
              <b>• Atmosfera esclusiva</b>{" "}
              <p>
                Un ambiente intimo, curato nei dettagli e pensato per farti
                sentire a casa mentre ti dedichi un momento tutto tuo.
              </p>
            </li>
            <div className={styles.Space}></div>
            <li>
              <b>• Consulenza personalizzata</b>
              <p>
                Analizzo forma, colore e stile delle tue mani per creare una
                Nail Art che racconti la tua personalità e si adatti alla tua
                routine.
              </p>
            </li>
          </ul>
          <div className={styles.Space}></div>
          <a href="/trattamenti">
            <ButtonGreen
              text="I MIEI TRATTAMENTI"
              voidBack={false}
              click={() => {}}
              num={0}
            />
          </a>
        </div>
      </div>
    </>
  );
}
