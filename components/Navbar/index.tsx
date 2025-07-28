"use client"; // This is a client component

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import ButtonNav from "./ButtonNav";
import ButtonNavList from "@/data/NavBar/ButtonNavList";
import { usePathname } from "next/navigation";

function navbar() {
  //variabile che indica il nome della PATH corrente
  const pathname = usePathname();

  return (
    <>
      <div className={styles.nav}>
        {/* funzione che genera i bottoni navbar con il database dell'oggetto ButtonNavList */}
        {ButtonNavList.map(function (e, i) {
          let active = 0;
          if (e.path === pathname) {
            active = 1;
          }
          return (
            <Link key={i} href={e.path}>
              <ButtonNav text={e.titolo} active={active} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default navbar;
