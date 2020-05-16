import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Social from "./components/Social";
import Home from "./components/Home";
import Page from "./components/Page";
import Testimonies from "./components/Testimonies";
import About from "./components/About";
//images
import exploreImg from "./assets/explore.jpg";
import exploreImg1 from "./assets/explore1.jpg";
import foodImg from "./assets/food.jpg";
import foodImg1 from "./assets/food1.jpg";
// images tablet
import exploreImgTablet from "./assets/tablet/explore.jpg";
import exploreImg1Tablet from "./assets/tablet/explore1.jpg";
import foodImgTablet from "./assets/tablet/food.jpg";
import foodImg1Tablet from "./assets/tablet/food1.jpg";
// images phone
import exploreImgPhone from "./assets/phone/explore.jpg";
import exploreImg1Phone from "./assets/phone/explore1.jpg";
import foodImgPhone from "./assets/phone/food.jpg";
import foodImg1Phone from "./assets/phone/food1.jpg";

function App() {
  const [exploreImages, setExploreImages] = useState([exploreImg, exploreImg1]);
  const [foodImages, setFoodImages] = useState([foodImg, foodImg1]);
  const app = useRef();
  const nav = useRef();
  const menuButton = useRef();
  const home = useRef();
  const explore = useRef();
  const food = useRef();
  const testimonies = useRef();
  const about = useRef();
  const social = useRef();

  const smoothScroll = (scrollTo) => {
    var startY = window.pageYOffset; //current scroll position
    var stopY = scrollTo; // scroll to
    var distance = stopY > startY ? stopY - startY : startY - stopY;

    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY += step;
        if (leapY > stopY) leapY = stopY;
        timer++;
      }
      return;
    }
    for (var i = startY; i > stopY; i -= step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY -= step;
      if (leapY < stopY) leapY = stopY;
      timer++;
    }
  };

  const onClickNav = (location) => {
    if (location === "explore") smoothScroll(explore.current.offsetTop);
    else if (location === "food") smoothScroll(food.current.offsetTop);
    else if (location === "testimonies")
      smoothScroll(testimonies.current.offsetTop);
    else if (location === "about") smoothScroll(document.body.scrollHeight);
    else if (location === "home") smoothScroll(0);

    //hide nav
    nav.current.classList.toggle("nav-hidden");
  };

  const onScroll = () => {
    // const homeBox = home.current.getBoundingClientRect();
    // const exploreBox = explore.current.getBoundingClientRect();
    // const foodBox = food.current.getBoundingClientRect();
    const testimoniesBox = testimonies.current.getBoundingClientRect();
    // const aboutBox = about.current.getBoundingClientRect();

    if (testimoniesBox.top < 50) {
      nav.current.style.color = "#4B4949";
      menuButton.current.style.color = "rgba(255, 111, 0, 0.7)";
      // social.current.style.color = "rgba(255, 111, 0, 0.7)";
    } else {
      nav.current.style.color = "white";
      // social.current.style.color = "white";
      menuButton.current.style.color = "white";
    }

    //transform components
    // if (homeBox.top < -100) {
    //   explore.current.style.transform = `translateY(-10%)`;
    //   food.current.style.transform = `translateY(-10%)`;
    //   testimonies.current.style.transform = `translateY(-20%)`;
    // } else {
    //   explore.current.style.transform = `translateY(0%)`;
    //   food.current.style.transform = `translateY(0%)`;
    //   testimonies.current.style.transform = `translateY(0%)`;
    // }

    // if (exploreBox.top < -200)
    //   food.current.style.transform = `translateY(-20%)`;

    // if (foodBox.top < -200)
    //   testimonies.current.style.transform = `translateY(-30%)`;

    // if (aboutBox.top < window.innerHeight) {
    //   explore.current.style.transform = `translateY(0%)`;
    //   food.current.style.transform = `translateY(0%)`;
    //   testimonies.current.style.transform = `translateY(0%)`;
    // }
  };

  const imageResize = () => {
    //tablet images
    if (window.innerWidth <= 800 && window.innerWidth > 450) {
      setExploreImages([exploreImgTablet, exploreImg1Tablet]);
      setFoodImages([foodImgTablet, foodImg1Tablet]);
    }
    //phone images
    if (window.innerWidth <= 450) {
      setExploreImages([exploreImgPhone, exploreImg1Phone]);
      setFoodImages([foodImgPhone, foodImg1Phone]);
    }
  };

  useEffect(() => {
    imageResize();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", imageResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", imageResize);
    };
  }, []);

  return (
    <div ref={app} className="App">
      <Nav ref={{ nav: nav, menuButton: menuButton }} onClickNav={onClickNav} />
      {/* <Social ref={social} /> */}
      <Home ref={home} />
      <Page ref={explore} pageName="explore" images={exploreImages} />
      <Page ref={food} pageName="food" images={foodImages} />
      <Testimonies ref={testimonies} />
      <About ref={about} />
    </div>
  );
}

export default App;
