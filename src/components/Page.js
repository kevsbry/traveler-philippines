import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import HeaderTitle from "./HeaderTitle";
import CarouselPage from "./CarouselPage";

const Explore = React.forwardRef((props, ref) => {
  const [headerTitle, setHeaderTitle] = useState("explore and experience");
  const [headerDescription, setHeaderDescription] = useState(
    <span className={styles.description}>
      Explore more than 7,000 islands across the country, experience the
      kindness <br />
      and hospitality of the Filipino people."
    </span>
  );

  useEffect(() => {
    if (props.pageName === "food") {
      setHeaderTitle("taste the culture");
      setHeaderDescription(
        <span className={styles.description}>
          The Philippines is composed of 17 regions, each one of them brings a
          different type of cuisine. Taste the best of what the country has to
          offer from Visayas, Luzon and Minanao.
        </span>
      );
    }
  }, []);

  const descriptionPosition = [
    {
      top: "50%",
      left: "8%",
    },
    {
      top: "45%",
      right: "5%",
    },
  ];

  return (
    <div ref={ref} className={styles.page}>
      <HeaderTitle
        color="#fff"
        title={headerTitle}
        description={headerDescription}
      />
      <CarouselPage
        position={descriptionPosition}
        pageName={props.pageName}
        images={props.images}
      />
    </div>
  );
});

export default Explore;
