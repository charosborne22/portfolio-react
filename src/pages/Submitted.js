import styled from "styled-components";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";
const Submitted = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Submit>
        <h1>Your message has been sent!</h1>
      </Submit>
    </motion.div>
  );
};

const Submit = styled.section`
  text-align: center;
`;

export default Submitted;
