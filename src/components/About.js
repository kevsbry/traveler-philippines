import React, { useState } from "react";
import styles from "./style.module.css";
import HeaderTitle from "./HeaderTitle";

const About = React.forwardRef((props, ref) => {
  const title = useState("about");
  const description = useState(
    <span className={styles.description}>
      This is a personal project for my portfolio
    </span>
  );

  return (
    <div ref={ref} className={styles.about}>
      <div>
        <HeaderTitle color="#fff" title={title} description={description} />
        <div className={styles.contacts}>
          <h2>Portfolio:</h2>
          <div>
            <a
              style={{ color: "white" }}
              href="https://kevsbry.github.io/portfolio"
              target="_blank"
            >
              <span>https://kevsbry.github.io/portfolio/</span>
            </a>
            {/* <span>Email: kevin_bryan09@yahoo.com</span> */}
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
