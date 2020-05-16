import React from "react";
import styles from "./style.module.css";

function HeaderTitle(props) {
  return (
    <div style={{ color: props.color }} className={styles["header-title"]}>
      <span className={styles.title}>{props.title}</span>
      {props.description}
    </div>
  );
}

export default HeaderTitle;
