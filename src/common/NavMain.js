import React, { useState, useEffect, createRef, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import ContainedButton from "./ContainedButton.js";

// Importing SVGs as React Components
import { ReactComponent as NavLogoText } from "./svg/vegaLogo_Onlylettring.svg";
import { ReactComponent as NavLogoIcon } from "./svg/vegaLogo.svg";
import { ReactComponent as LogoEmblem } from "./svg/logoEmblem.svg";
import { ReactComponent as AboutIcon } from "./svg/about.svg";
import { ReactComponent as HomeIcon } from "./svg/home.svg";
import { ReactComponent as SupportIcon } from "./svg/support.svg";
import { ReactComponent as VegaEvxIcon } from "./svg/vegaEvx.svg";

//Lottie Animator Player
import { Player } from "@lottiefiles/react-lottie-player";
// GSAP Animations
import gsap from "gsap";
// Gsap Plugins plugins:
import { Timeline } from "gsap/gsap-core";

function NavMain() {
  // States
  const [modeDark, setModeDark] = useState(false);
  const [staticStatus, setStaticStatus] = useState(true);
  const [activeStatus, setActiveStatus] = useState(false);
  const [btnState, setBtnState] = useState(false);

  //React router dom uri push
  const history = useHistory();
  //Lottie animator
  const animationRef = createRef();

  // Nav logic
  useEffect(() => {
    const navBar = document.querySelector(".navbar-wrapper");
    const navBurger = document.querySelector(".navbar-hamburger");
    navBar.style.transform = `translateX(100px)`;
    navBurger.addEventListener("click", function () {
      navBar.style.transform = `none`;
      if (navBar.style.transform === `none`) {
        navBurger.style.visibility = `hidden`;
      }
    });
  }, []);

  // GSAP animations
  var navItemsRef = useRef(null);
  var tl = new Timeline();

  useEffect(() => {
    let navItemsRig = navItemsRef;
    tl = gsap.fromTo(
      navItemsRig.children,
      {
        opacity: 0,
        y: "0.5em",
        stagger: 0.1,
        duration: 0.2,
        ease: "power3.easeIn",
      },
      {
        opacity: 1,
        y: "0em",
        stagger: 0.1,
        duration: 0.2,
        ease: "power3.easeOut",
      }
    );

    // Change HeaderNav State depending on RouteLocationPathname
    const getUrl = window.location.pathname;
    if (
      getUrl === "/about" ||
      getUrl === "/support" ||
      getUrl === "/investors" ||
      getUrl === "/blog" ||
      getUrl === "/reserve"
    ) {
      setModeDark(true);
    } else if (
      getUrl === "/" ||
      getUrl === "/careers" ||
      getUrl === "/vega-evx"
    ) {
      setModeDark(false);
      setBtnState(true);
    }
    if (getUrl == "/reserve") {
      setBtnState(false);
    } else {
      setBtnState(true);
    }
  });

  const IconStyles = {
    cursor: "pointer",
  };

  return (
    <Router>
      <HeaderNav className="navbar-header">
        <a href="/">
          <NavLogoContainer>
            <HeaderLogo />
            <HeaderLogoText modeDark={modeDark} />
          </NavLogoContainer>
        </a>

        <HeaderNavItem>
          <ContainedButtonWrapper btnState={btnState}>
            <ContainedButton
              content="reserve"
              text="white"
              height="nav"
              onClick={() => window.open("/reserve", "_self")}
              className="nav-header-contained-btn"
            />
          </ContainedButtonWrapper>
          <HeaderItemHamburger className="navbar-hamburger">
            <HamburgerIcon
              hover
              ref={animationRef}
              src="https://assets10.lottiefiles.com/private_files/lf30_10djsmqh.json"
              modeDark={modeDark}
            ></HamburgerIcon>
          </HeaderItemHamburger>
        </HeaderNavItem>
      </HeaderNav>
      <NavWrapper>
        <NavStatic
          className="navbar-wrapper"
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
          <NavElements ref={(el) => (navItemsRef = el)}>
            <NavMainItemsWrapper>
              <NavMainItems onClick={() => history.push("/")}>
                Home
              </NavMainItems>
              {/* Without ReactRouterDOM => window.open("/vega-evx","_self") */}
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
              <NavMainItems onClick={() => history.push("/careers")}>
                Careers
              </NavMainItems>
              <NavMainItems onClick={() => history.push("/support")}>
                Support
              </NavMainItems>
            </NavMainItemsWrapper>
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
  grid-template-columns: 10vw 70vw 20vw;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: inherit;
  transition: all 0.5s ease-in-out;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  padding: 5px 0 0 5px;
`;
const HeaderNavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  grid-column: 3/4;
  margin-top: 10px;
  margin-left: 40px;
`;

const ContainedButtonWrapper = styled.div`
  padding: 0 50px 0 0;
  display: ${(props) => (props.btnState ? "flex" : "none")};
`;

const HeaderItemHamburger = styled.div`
  justify-content: space-between;
  align-items: center;
  margin: 0 70px 0 0;
`;
const HamburgerIcon = styled(Player)`
  height: 50px;
  cursor: pointer;
  width: 55px;
  path {
    fill: ${(props) => (props.modeDark ? "white" : "black")};
  }
`;
const NavLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 20px;
  cursor: pointer;
`;
const HeaderLogo = styled(NavLogoIcon)`
  cursor: pointer;
  height: 100%;
  width: 60px;
`;
const HeaderLogoText = styled(NavLogoText)`
  padding: 0 0 0 20px;
  height: 100%;
  width: 360px;
  path {
    fill: ${(props) => (props.modeDark ? "white" : "black")};
  }
`;

const NavWrapper = styled.div``;

const NavActive = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100vh;
  top: 0;
  right: 0;
  color: white;
  z-index: 10;
  background-color: ${(props) => props.theme.secondaryColor};
  width: 300px;
  transition: all 0.4s ease-in-out;
  transition-timing-function: cubic-bezier(0.01, 5, 1.03);
  transform: ${(props) =>
    props.showActive ? "translateX(0)" : "translateX(300px)"};
`;
const NavStatic = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  flex-direction: column;
  height: 100vh;
  color: white;
  background-color: ${(props) => props.theme.secondaryColor};
  z-index: 20;
  display: flex;
  transform: ${(props) =>
    props.showStatic ? "translateX(0)" : "translateX(100px)"};
  transition: all 0.2s ease-in;
  transition-timing-function: cubic-bezier(0, 0, 0, 1);
`;

const NavElements = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 185px;
  padding: 20px 110px 20px 10px;
  height: 100%;
`;

const NavMainItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 auto 0;
`;
const NavMainItems = styled.ul`
  padding-top: 25px;
  font-family: ${(props) => props.theme.mainFont};
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
  font-family: ${(props) => props.theme.mainFont};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: end;
  letter-spacing: -0.154px;
  color: white;
  padding: 5px 0 0 0;
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
  fill: white;
  a {
    padding: 2px;
  }
  :hover {
    fill: ${(props) => props.theme.accentColor};
  }

  svg {
    :hover {
      fill: ${(props) => props.theme.accentColor};
    }

    path {
      fill: white;
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
  margin: 35px 45px;
  border-radius: 100px;
`;

const ScrollElement = styled.div`
  box-sizing: border-box;
  background: white;
  border-radius: 100px;
  width: 100%;
  height: 40%;
`;
