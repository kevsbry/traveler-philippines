import React from "react";
import styles from "./style.module.css";

const Home = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.home}>
      <div className={styles["text-container"]}>
        <span>
          <span className={styles.small}>It's more fun in the</span>
          <br />
          <span className={styles.large}>Philippines</span> <br />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </span>
      </div>
    </div>
  );
});

export default Home;
