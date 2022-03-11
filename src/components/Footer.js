import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <nav>
        <ul className="social-icons">
          <li>
            <a href="https://github.com/charosborne22" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/charlotteosborne">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/charlotte-osborne-bb5a591a6/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <Link to="/policy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link to="/ethics"> Code of Ethics </Link>
      </nav>
      <p className="copyright">Copyright &copy; Charlotte Osborne</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 20vh;
  background: #495a58;
  margin: 0 calc(-50vw + 50%);
  margin-top: 2rem;
  text-align: center;

  .social-icons {
    display: flex;
    list-style-type: none;
    margin: 1rem 0;

    li {
      padding: 0 0.5rem;

      a {
        color: white;
      }
    }
  }
  nav {
    display: flex;
  }
  a {
    color: white;
    text-decoration: none;
    margin-bottom: 1rem;
  }
  .divider {
    color: white;
    padding: 0 0.25rem;
  }
  .copyright {
    color: white;
  }
`;

export default Footer;
