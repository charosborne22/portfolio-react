import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navStatus, setNavStatus] = useState(false);
  const navHandler = () => {
    setNavStatus(!navStatus);
  };
  return (
    <>
      <SkipLink href="#main">Skip to main content</SkipLink>
      <Header>
        <StyledNav>
          <h1 className="logo">
            <Link to="/">CO.</Link>
          </h1>
          <div
            className={`menu-icon ${navStatus ? "menu-icon-active" : ""}`}
            onClick={navHandler}
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
          <div className={`nav-list ${navStatus ? "nav-active" : ""}`}>
            <ul>
              <li>
                <Link to="/" onClick={navHandler}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={navHandler}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={navHandler}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </StyledNav>
      </Header>
    </>
  );
};

const SkipLink = styled.a`
  position: absolute;
  transform: translateY(-100%);
  z-index: 11;
  transition: 0.4s;

  &:focus {
    transform: translateY(0);
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  background: white;
  margin: 0 calc(-50vw + 50%);
  z-index: 10;

  @media (max-width: 1398.98px) {
    padding: 0 2rem;
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  max-width: 1400px;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 2.5rem;
  }
  a {
    text-decoration: none;
  }

  .nav-list {
    ul {
      list-style-type: none;
    }

    li {
      display: inline;
      padding: 0 0.5rem;

      a {
        padding: 0 0.5rem;
      }
    }
  }

  @media (max-width: 767.98px) {
    .menu-icon {
      cursor: pointer;
      z-index: 10;
      div {
        width: 24px;
        height: 3px;
        margin: 5px;

        background: black;
      }
    }
    .menu-icon-active {
      .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
      }
      .line2 {
        opacity: 0;
      }
      .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
      }
    }
    .nav-list {
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      width: 0;
      transform: translateX(100%);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background: white;
      transition: all 0.3s ease;
      overflow-x: hidden;

      li {
        overflow-x: hidden;
        display: block;
        padding: 0.5rem 0;
        a {
          font-size: 2rem;
        }
      }
    }
    .nav-active {
      width: 100%;
      transform: translateX(0);
    }
  }
`;

export default Nav;
