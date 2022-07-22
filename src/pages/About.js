import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";

const About = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>About</h1>
      <AboutSection>
        <div className="about-text">
          <p>
            My name is Charlotte and I’m a front-end developer from Peterborough
            Ontario. I design and develop sites for the modern web that are both
            user friendly and accessible. I strive to reach (WCAG) 2 Level AA
            Compliance on all my websites.
          </p>
          <p>
            In 2019 I graduated with a Bachelor of Science in Chemistry from
            Trent University. While studying at Trent, I took several computer
            science courses and developed of passion for web design. After
            graduating, I decided to pursue my passion in web design by
            enrolling in McMaster’s web design program.
          </p>
          <p>I look forward to working with you!</p>
        </div>
        <div className="skills">
          <ul className="skill-list">
            <li>
              <FontAwesomeIcon icon={faCheck} /> HTML
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> CSS/SASS
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> JavaScript
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Bootstrap
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> WordPress
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Responsive Design
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Web Accessibility
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> GSAP
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> React
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Next.js
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Strapi
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} /> Framer Motion
            </li>
          </ul>
        </div>
      </AboutSection>
    </motion.div>
  );
};

const AboutSection = styled.div`
  display: flex;

  .about-text {
    flex-basis: 70%;
  }
  .skills {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-basis: 30%;
  }

  .skill-list {
    list-style-type: none;
  }

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 767.98px) {
    display: block;

    .skills {
      align-items: flex-start;
    }
  }
`;

export default About;
