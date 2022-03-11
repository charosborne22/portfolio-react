import Intro from "../components/Intro";
import Description from "../components/Description";
import Work from "../components/Work";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";
const Index = () => {
  return (
    <motion.div variants={PageAnimation} exit="exit">
      <Intro />
      <Description />
      <Work />
    </motion.div>
  );
};

export default Index;
