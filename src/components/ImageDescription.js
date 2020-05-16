import React from "react";
import styles from "./style.module.css";

const ImageDescription = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={props.style} className={styles["image-description"]}>
      <span className={styles.title}>{props.title}</span>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
});

export default ImageDescription;
