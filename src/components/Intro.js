import heroImg from "../img/hero.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeRight, fadeLeft } from "../animation";

const Intro = () => {
  return (
    <Hero>
      <Img variants={fadeRight} initial="hidden" animate="visible">
        <img src={heroImg} alt="Waves in the ocean" />
      </Img>
      <Text variants={fadeLeft} initial="hidden" animate="visible">
        <div className="text-inner">
          <h1>Charlotte Osborne</h1>
          <p>Front-end web development</p>
        </div>
      </Text>
    </Hero>
  );
};

const Hero = styled.section`
  height: 50vh;
  display: flex;
  @media (max-width: 767.98px) {
    display: block;
    height: 120vh;
  }

  @media (max-width: 575.98px) {
    height: 80vh;
  }

  @media (max-width: 575.98px) {
    height: 75vh;
  }
`;

const Img = styled(motion.div)`
  display: flex;
  flex-basis: 50%;

  img {
    width: 100%;
    height: auto;
  }
`;

const Text = styled(motion.div)`
  flex-basis: 50%;

  .text-inner {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding-left: 2rem;

    h1 {
      font-size: 3rem;
    }
    p {
      padding-bottom: 2rem;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 767.98px) {
    .text-inner {
      padding-left: 0;
    }
  }
`;

export default Intro;
