import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.css";
import HeaderTitle from "./HeaderTitle";
//images
import img from "../assets/testimony4.jpg";
import img1 from "../assets/testimony.jpg";
import img2 from "../assets/testimony2.jpg";

const Testimonies = React.forwardRef((props, ref) => {
  const title = useState("testimonies");
  const commentsRef = useRef();
  const slide = useRef();
  const description = useState(
    <span className={styles.description}>
      This is what the people have to say about the Philippines!
    </span>
  );

  useEffect(() => {
    let amount = 0;
    setInterval(() => {
      if (amount < 200) amount += 100;
      else amount = 0;

      slide.current.style.transform = `translateX(-${amount}%)`;

      let comments = commentsRef.current.querySelectorAll("p");
      comments.forEach((el) => {
        el.classList.add("red");
      });
    }, 5000);
  }, []);

  const [comments, setComments] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  ]);

  const leftAlignStyle = {
    paddingRight: "60%",
    textAlign: "left",
  };

  const rightAlignStyle = {
    paddingLeft: "40%",
    paddingRight: "20%",
    textAlign: "right",
  };

  const centerAlignStyle = {
    padding: "0",
    textAlign: "center",
  };

  return (
    <div ref={ref} className={styles.testimonies}>
      <HeaderTitle color="#4B4949" title={title} description={description} />
      <div className={styles["content-container"]}>
        <div ref={commentsRef} className={styles.comments}>
          {comments.map((comment, i) =>
            window.innerWidth > 1200 ? (
              i === 1 ? (
                <p key={i} style={rightAlignStyle}>
                  {comment}
                </p>
              ) : (
                <p key={i} style={leftAlignStyle}>
                  {comment}
                </p>
              )
            ) : (
              <p key={i} style={centerAlignStyle}>
                {comment}
              </p>
            )
          )}
        </div>

        <div className={styles.carousel}>
          <div ref={slide} className={styles.slide}>
            <div>
              <img src={img} alt="image" />
            </div>
            <div>
              <img src={img1} alt="image" />
            </div>
            <div>
              <img src={img2} alt="image" />
            </div>
            {/* <img src={img1} alt="image" /> */}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Testimonies;
