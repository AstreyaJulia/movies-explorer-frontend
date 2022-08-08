import React from "react";
import './NavTab.css';
import Container from "../Container/Container";
import {NAV_MENU} from "../../utils/constants";
import LinkCustom from "../LinkCustom/LinkCustom";

const NavTab = () => {
  return (
    <section className="nav-tab">
      <Container class='nav-tab__container'>
        <ul className="nav-tab__list">
          {NAV_MENU.map((item) =>
            <li className="nav-tab__item" key={item.title}>
              <LinkCustom type='link' to={item.href} class='nav-tab__link' text={item.title}/>
            </li>
          )}
        </ul>
      </Container>
    </section>
  );
};

export default NavTab;
