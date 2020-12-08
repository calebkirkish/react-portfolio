import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Header = () => {
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div id="header">
      <Menu pointing secondary>
        <Menu.Item
          as={NavLink}
          to="/"
          name="home"
          id="home-nav"
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={NavLink}
          to="/portfolio"
          name="portfolio"
          active={activeItem === "portfolio"}
          onClick={handleItemClick}
        >
          Portfolio
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
