import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.css";
import ImageDescription from "./ImageDescription";

const Control = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles["carousel-control"]}>
      {props.images.map((img, i) => (
        <div
          value={i}
          onClick={props.onClickControl}
          key={i}
          className={styles.bar}
        ></div>
      ))}
    </div>
  );
});

function CarouselPage(props) {
  const { images, pageName, position } = props;
  const slide = useRef();
  const descriptionRef = useRef();
  const carouselControl = useRef();

  //image title and description
  const [title, setTitle] = useState("boracay");
  const [description, setDesciption] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );

  useEffect(() => {
    if (pageName === "food") setTitle("traditional filipino cuisine");
    const buttons = carouselControl.current.querySelectorAll("div");
    buttons[0].style.backgroundColor = "black";
  }, []);

  const onClickControl = (e) => {
    const buttons = carouselControl.current.querySelectorAll("div");
    buttons.forEach((el) => {
      el.style.backgroundColor = "#fff";
    });
    const button = e.target;
    button.style.backgroundColor = "black";
    const value = parseInt(button.getAttribute("value"));

    slide.current.style.transform = `translateX(-${100 * value}%)`;

    //manipulate description
    if (props.pageName === "explore") {
      if (value === 0) {
        setTitle("boracay");
      } else if (value === 1) {
        setTitle("palawan");
      }
    } else if (props.pageName === "food") {
      if (value === 0) setTitle("TRADITIONAL FILIPINO CUISINE");
      else if (value === 1) setTitle("Filipino breakfast");
    }
  };

  return (
    <div className={styles["carousel-page"]}>
      <div ref={slide} className={styles["carousel-slide"]}>
        {images.map((img, i) => (
          <img key={i} src={img} alt="image" />
        ))}
      </div>
      <ImageDescription
        ref={descriptionRef}
        style={pageName === "explore" ? position[0] : position[1]}
        title={title}
        description={description}
      />
      <Control
        ref={carouselControl}
        onClickControl={onClickControl}
        images={images}
      />
    </div>
  );
}

export default CarouselPage;
