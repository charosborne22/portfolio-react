import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../animation";
import { useScroll } from "./useScroll";
const Description = () => {
  const [element, controls] = useScroll();
  return (
    <StyledDescription>
      <motion.h2
        variants={fadeUp}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        Designing and developing user-friendly and accessible websites
      </motion.h2>
      <Link to="/contact">Contact</Link>
    </StyledDescription>
  );
};

const StyledDescription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 250px;
  margin: 4rem calc(-50vw + 50%);
  background: #f7f8f6;
  text-align: center;
  padding: 0 0.5rem;

  a {
    padding: 4px;
    text-decoration: none;
  }
`;

export default Description;
