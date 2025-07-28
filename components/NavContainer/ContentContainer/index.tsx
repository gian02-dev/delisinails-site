import React, { Component } from "react";
import styles from "./contentcontainer.module.scss";

interface ContentContainerProps {
  content: string;
  id: number;
  useState: number;
}

function ContentContainer({ content, id, useState }: ContentContainerProps) {
  let visible;
  if (id === useState) {
    visible = true;
  }
  return (
    <>
      {visible === true ? (
        <div className={styles.visibleContent} key={content}>
          {content}
        </div>
      ) : (
        <div className={styles.invisibleContent} key={content}>
          {content}
        </div>
      )}
    </>
  );
}

export default ContentContainer;
