"use client"; // This is a client component

import styles from "./page.module.scss";
import ButtonGreen from "@/components/Buttons/ButtonGreen";
import NavContainer from "@/components/NavContainer";
import TitlesContainerList from "@/data/NavContainer/TitlesContainerList";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import CardsList from "@/data/Cards/CardsList";

export default function Home() {
  return (
    <>
      {/* <NavContainer element={TitlesContainerList} /> */}
      <div className={styles.home}>
        <div className={styles.logo}>
          <a href="/">
            <img src="/profile.png" alt="FOTO ALESSIA" />
          </a>
        </div>
        <div className={styles.text}>
          <b className={styles.Title}>La tua Nail Artist a Palermo</b>
          <p>
            Da 5 anni esalto la bellezza delle mani con creatività, tecnica e
            massima attenzione alla salute delle unghie
          </p>
          <div className={styles.Space}></div>
          <b className={styles.Title}>Perché scegliermi</b>
          <ul>
            <p>
              <b>• Formazione top: </b>
              certificazioni d’eccellenza ed estetista presso AC Wilde School
            </p>
            <p>
              <b>• Unghia sane: </b>
              trattamenti che rispettano la fisiologia, dal Manicure al Gel
            </p>
            <p>
              <b>• Igiene totale: </b>
              strumenti sterili e postazione sanificata ogni volta
            </p>
            <p>
              <b>• Studio esclusivo: </b>
              ambiente intimo, curato, 100% relax
            </p>
            <p>
              <b>• Nail Art su misura: </b>
              design creati su forma, colore e stile delle tue mani
            </p>
          </ul>
          <div className={styles.Space}></div>
          <a href="/trattamenti">
            <ButtonGreen
              text="I MIEI TRATTAMENTI"
              voidBack={false}
              click={() => {}}
              id={0}
              idSetOnClick={0}
            />
          </a>
        </div>
      </div>
    </>
  );
}
