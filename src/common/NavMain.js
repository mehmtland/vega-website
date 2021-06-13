import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory,
} from "react-router-dom";
import { ReactComponent as LogoEmblem } from "./svg/logoEmblem.svg";
import { ReactComponent as AboutIcon } from "./svg/about.svg";
import { ReactComponent as HomeIcon } from "./svg/home.svg";
import { ReactComponent as SupportIcon } from "./svg/support.svg";
import { ReactComponent as VegaEvxIcon } from "./svg/vegaEvx.svg";
import { ReactComponent as HeaderHamburgerIcon } from "./svg/menu_black_24dp.svg";
import ContainedButton from "./ContainedButton.js";
import { ReactComponent as NavLogoIcon } from "./svg/vega_logo_lettering.svg";
import VegaEvx from "../vegaEvx/VegaEvx.js";
import Home from "../home/Home.js";

function NavMain() {
  const history = useHistory();
  useEffect(() => {
    const navBurger = document.querySelector(".navbar-hamburger");
    const navBar = document.querySelector(".navbar-wrapper");

    navBurger.addEventListener("click", function () {
      navBar.style.transform = `none`;
      if (navBar.style.transform === `none`) {
        navBurger.style.visibility = `hidden`;
      }
    });
  });
  const [staticStatus, setStaticStatus] = useState(true);
  const [activeStatus, setActiveStatus] = useState(false);

  const IconStyles = {
    cursor: "pointer",
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/vega-evx">
          <VegaEvx />
        </Route>
      </Switch>
      <HeaderNav className="navbar-header">
        <a href="/">
          <HeaderLogo />
        </a>
        <HeaderNavItem>
          <ContainedButton
            content="reserve"
            text="white"
            height="nav"
          ></ContainedButton>
        </HeaderNavItem>
        <HeaderItemHamburger className="navbar-hamburger">
          <HamburgerIcon />
        </HeaderItemHamburger>
      </HeaderNav>
      <NavWrapper className="navbar-wrapper">
        <NavStatic
          onMouseEnter={() => setActiveStatus(true)}
          showStatic={staticStatus}
        >
          <LogoWrapper>
            <a href="/">
              <Emblem />
            </a>
          </LogoWrapper>
          <ScrollContainer>
            <ScrollBar>
              <ScrollElement className="scroll-element" />
            </ScrollBar>
          </ScrollContainer>
          <IconWrapper>
            <HomeIcon style={IconStyles} onClick={() => history.push("/")} />
            <VegaEvxIcon
              style={IconStyles}
              onClick={() => history.push("/vega-evx")}
            />
            <AboutIcon
              style={IconStyles}
              onClick={() => history.push("/about")}
            />
            <SupportIcon
              style={IconStyles}
              onClick={() => history.push("/support")}
            />
          </IconWrapper>
        </NavStatic>
        <NavActive
          onMouseLeave={() => setActiveStatus(false) && setStaticStatus(true)}
          showActive={activeStatus}
        >
          <NavElements>
            <NavMainItems onClick={() => history.push("/")}>Home</NavMainItems>
            <NavItems>Vega Evx</NavItems>
            <NavItems>Values</NavItems>
            <NavItems>Blog and News</NavItems>
            <NavItems>Newsletter</NavItems>
            <NavMainItems onClick={() => history.push("/vega-evx")}>
              Vega Evx
            </NavMainItems>
            <NavMainItems onClick={() => history.push("/investors")}>
              Investors
            </NavMainItems>
            <NavMainItems onClick={() => history.push("/blog")}>
              Blog And News
            </NavMainItems>
            <NavMainItems onClick={() => history.push("/about")}>
              About
            </NavMainItems>
            <NavMainItems onClick={() => history.push("/support")}>
              Support
            </NavMainItems>
          </NavElements>
        </NavActive>
      </NavWrapper>
    </Router>
  );
}

export default NavMain;

const HeaderNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 10vw 70vw 10vw 10vw;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: inherit;
  transition: all 0.5s ease-in-out;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  padding-top: 2px;
`;
const HeaderNavItem = styled.div`
  grid-column: 3/4;
  justify-self: flex-end;
`;
const HeaderItemHamburger = styled.div`
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
`;
const HamburgerIcon = styled(HeaderHamburgerIcon)`
  width: 50px;
  height: 70px;
  cursor: pointer;
  padding-top: 5px;
`;
const HeaderLogo = styled(NavLogoIcon)`
  margin: 20px 0 0 20px;
  cursor: pointer;
  height: 100%;
  width: 500px;
`;

const NavActive = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-self: flex-end;
  height: 100vh;
  top: 0;
  right: 0;
  color: white;
  background-color: ${(props) => props.theme.secondaryColor};
  width: 300px;
  transition: all 0.4s ease-in-out;
  transition-timing-function: cubic-bezier(0.01, 5, 1.03);
  transform: ${(props) =>
    props.showActive ? "translateX(0%)" : "translateX(100%)"};

  &:hover {
  }
`;
const NavStatic = styled.div`
  position: fixed;
  width: 100px;
  flex-direction: column;
  height: 100vh;
  top: 0;
  right: 0;
  color: white;
  background-color: ${(props) => props.theme.secondaryColor};
  z-index: 99;
  display: ${(props) => (props.showStatic ? "flex" : "none")};
`;

const NavElements = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 300px;
  padding: 20px 110px 20px 10px;
`;
const NavMainItems = styled.ul`
  font-family: Roboto;
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: end;
  letter-spacing: -0.154px;
  text-decoration: none;
  color: white;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.accentColor};
  }
`;
const NavItems = styled.ul`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: end;
  letter-spacing: -0.154px;
  color: white;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Emblem = styled(LogoEmblem)`
  cursor: pointer;
  margin-top: 40px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 60px;
  margin-top: auto;
  padding-bottom: 50px;
  a {
    padding: 2px;
  }
  svg {
    path {
      :hover {
        fill: ${(props) => props.theme.accentColor};
      }
    }
  }
`;
const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const ScrollBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #606060;
  width: 3px;
  height: 100%;
  justify-self: center;
  align-items: center;
  margin: 45px 45px;
  border-radius: 100px;
`;

const ScrollElement = styled.div`
  box-sizing: border-box;
  background: white;
  border-radius: 100px;
  width: 100%;
  height: 40%;
`;

const NavWrapper = styled.div`
  transform: translateX(100%);
  transition: all 0.5s ease-in-out;
`;
