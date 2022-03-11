import styled from "styled-components";
import { motion } from "framer-motion";
import { fade } from "../animation";
import { useScroll } from "./useScroll";
import sl from "../img/work/sharing-light.png";
import te from "../img/work/the-edited.png";
import bhf from "../img/work/behavioral-health-foundation.png";
import is from "../img/work/intuitive-soul.png";

const Work = () => {
  const [element, controls] = useScroll();
  return (
    <RecentWork>
      <h2>Recent Work</h2>
      <ImgGrid>
        <motion.div
          variants={fade}
          animate={controls}
          initial="hidden"
          ref={element}
          className="work-item"
        >
          <a href="https://sharinglight.ca/" target="_blank">
            <img src={sl} alt="Sharing Light Screenshot" />
            <h3>Sharing Light</h3>
          </a>
        </motion.div>

        <motion.div
          variants={fade}
          animate={controls}
          initial="hidden"
          ref={element}
          className="work-item"
        >
          <a href="https://theedited.ca/" target="_blank">
            <img src={te} alt="The Edited Screenshot" />
            <h3>The Edited</h3>
          </a>
        </motion.div>

        <motion.div
          variants={fade}
          animate={controls}
          initial="hidden"
          ref={element}
          className="work-item"
        >
          <a href="https://behavioralhealthfoundation.org/" target="_blank">
            <img src={bhf} alt="Behaviorial Health Fountdation Screenshot" />
            <h3>Behavioral Health Foundation</h3>
          </a>
        </motion.div>

        <motion.div
          variants={fade}
          animate={controls}
          initial="hidden"
          ref={element}
          className="work-item"
        >
          <a href="https://intuitivesoul.com/" target="_blank">
            <img src={is} alt="Intuitive Soul Screenshot" />
            <h3>Intuitive Soul</h3>
          </a>
        </motion.div>
      </ImgGrid>
    </RecentWork>
  );
};

const RecentWork = styled.section`
  h2 {
    text-align: center;
  }
`;

const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  h3 {
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export default Work;
