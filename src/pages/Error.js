import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";
function Error() {
  return (
    <StyledError
      variants={PageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </StyledError>
  );
}

const StyledError = styled(motion.div)`
  text-align: center;
`;

export default Error;
