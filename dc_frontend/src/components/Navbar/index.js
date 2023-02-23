import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./NavbarStyles.css";

import { data } from "./data";
import { Flex } from "@tremor/react";

const Logo = ({ texto }) => {
  return (
    <div className="">
      {" "}
      <h1 className="logo">{texto}</h1>
    </div>
  );
};

const MenuHamburger = ({ clicked, handleClick }) => {
  return (
    <div className="menu-icons" onClick={handleClick}>
      {clicked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-x"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 16 16">
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-grid-3x3-gap-fill"
          width="36"
          height="36"
          fill="currentColor"
          viewBox="0 0 16 16">
          <path
            d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"
            fill="white"
          />
        </svg>
      )}
    </div>
  );
};

const ListadoNav = ({ data, clicked }) => {
  return (
    <ul className={clicked ? "nav-menu active" : "nav-menu"}>
      {data.map((obj, i) => {
        const { text, to, svg } = obj;
        return (
          <li
            className="nav-link"
            width="100%"
            key={i}
            aling-text="center"
            justify="center">
            <NavLink to={to}>
              <Flex>
                <i className="fa-react">{svg}</i> {text}
              </Flex>
            </NavLink>
          </li>
        );
      })}
      <li className="nav-link-mobile" width="100%" key={99}>
        <NavLink to={"to"}>Logout</NavLink>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavbarItems bg-sky-600">
      <Logo texto={"SACGes"} />
      <MenuHamburger clicked={clicked} handleClick={handleClick} />
      <ListadoNav data={data} clicked={clicked} />
    </nav>
  );
};

export default Navbar;
