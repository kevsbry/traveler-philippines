import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = React.forwardRef((props, ref) => {
  const { onClickNav } = props;

  const onMenuClick = () => {
    ref.nav.current.classList.toggle("nav-hidden");
  };

  return (
    <>
      <div ref={ref.nav} className="nav nav-hidden">
        <div className="nav-container">
          <span
            onClick={() => {
              onClickNav("home");
            }}
            className="logo"
          >
            traveler
          </span>
          <div className="location">
            <span
              onClick={() => {
                onClickNav("home");
              }}
            >
              home
            </span>
            <span
              onClick={() => {
                onClickNav("explore");
              }}
            >
              explore
            </span>
            <span
              onClick={() => {
                onClickNav("food");
              }}
            >
              food
            </span>
            <span
              onClick={() => {
                onClickNav("testimonies");
              }}
            >
              testimonies
            </span>
            <span
              onClick={() => {
                onClickNav("about");
              }}
            ></span>
          </div>
        </div>
      </div>

      <div className="menu-button" ref={ref.menuButton} onClick={onMenuClick}>
        <FontAwesomeIcon className="menu-icon" icon={faBars} />
      </div>
    </>
  );
});

export default Nav;
