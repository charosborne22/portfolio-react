import styled from "styled-components";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";

const Contact = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Contact</h1>
      <StyledContact>
        <ContactText>
          I will be happy to answer any questions and set up a meeting with you!
        </ContactText>
        <ContactForm>
          <form
            action="https://formsubmit.co/contact@charlotteosborne.ca"
            className="contact-form"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label> <br />
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label> <br />
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label> <br />
              <input type="text" name="_subject" id="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label> <br />
              <textarea name="message" id="message" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Send</button>
            </div>
            <input type="hidden" name="_captcha" value="false"></input>
            <input
              type="hidden"
              name="_next"
              value="https://charlotteosborne.ca/submitted"
            ></input>
          </form>
        </ContactForm>
      </StyledContact>
    </motion.div>
  );
};

const StyledContact = styled.div`
  display: flex;
  height: 100%;
`;

const ContactText = styled(motion.div)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-basis: 30%;
`;

const ContactForm = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-basis: 70%;

  .contact-form {
    width: 100%;
    padding-left: 1rem;
    .form-group {
      margin-bottom: 1rem;
    }
    input,
    textarea {
      width: 100%;
      font-size: 1.25rem;
    }

    input {
      height: 2rem;
    }

    textarea {
      height: 5rem;
    }

    button {
      padding: 0.5rem 1rem;
      color: white;
      background: #495a58;
      border: 1px solid #495a58;
      cursor: pointer;
    }
  }
`;

export default Contact;
