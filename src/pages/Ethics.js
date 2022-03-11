import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";

const Ethics = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Code of Ethics</h1>
      <h2>The Profession</h2>
      <List>
        <li>
          I will work in accordance to federal, provincial and municipal laws,
          regulations or by-laws of Ontario, Canada
        </li>
        <li>
          I will act with honesty and integrity, as well as a reasonable
          standard of design and professionalism
        </li>
        <li>
          I will not authorize, permit, counsel, aid, abet or acquiesce in any
          act that constitutes disregard for this Code of Ethics
        </li>
        <li>
          I will not partake in any work that propagates hate or disregards
          human rights
        </li>
      </List>

      <h2>Clients & Employers</h2>
      <List>
        <li>
          I will act in client’s or employer’s best interests within the limits
          of this Code of Ethics
        </li>
        <li>
          I will not work simultaneously on assignments that create a conflict
          of interest without the agreement of the clients or employers
          concerned
        </li>
        <li>
          I will not misrepresent myself or those I work with by making, or
          being party to, false statements, false representations, or
          non-performance of stated scope of services
        </li>
        <li>
          I will not disclose confidential information received from a client or
          employer except as authorised by law or with the consent of the client
          or employer as applicable
        </li>
      </List>

      <h2>The Society and the Environment</h2>
      <List>
        <li>
          I will not do or fail to do anything that constitutes a deliberate or
          reckless disregard for the health and safety of communities and
          practise or the privacy of the individuals and businesses
        </li>
        <li>
          I will take a responsible role in the visual portrayal of people, the
          consumption of natural resources and the protection of animals and the
          environment
        </li>
        <li>
          I will not accept instructions from a client or employer that involve
          infringement of another person’s or group’s human rights or property
          rights or consciously act in any manner involving any such
          infringement
        </li>
      </List>

      <h2>Competitions and Fees</h2>
      <List>
        <li>
          I will not work for a client or employer without compensation except
          for occasional pro bono work for charitable purposes
        </li>
        <li>
          I may take part in a limited design competition where each participant
          in the competition is provided equal compensation in accordance with
          the work involved
        </li>
        <li>I will not undertake speculative work</li>
      </List>

      <h2>Intellectual Property and Authorship</h2>
      <List>
        <li>
          I will not knowingly copy the design or work of another person without
          consent or agreement
        </li>
        <li>
          I will not claim sole credit for a design which other designers have
          collaborated
        </li>
        <li>
          I will not transfer property rights to original work unless it is
          specifically purchased apart from reproduction rights
        </li>
      </List>

      <p>
        This code of ethics draws references from{" "}
        <a
          href="https://www.gdc.net/sites/default/files/attachments/static-pages/1_3_ethics_2012.pdf"
          target="_blank"
        >
          Society of Graphic Designers Canada
        </a>{" "}
        however I am not affiliated with this organization.
      </p>
      <p>
        Feel free to <Link to="/contact">contact me</Link> with any questions
        regarding my code.
      </p>
    </motion.div>
  );
};

const List = styled.ul`
  margin-bottom: 1rem;

  li {
    line-height: 1.5;
    margin-left: 1rem;
  }
`;

export default Ethics;
