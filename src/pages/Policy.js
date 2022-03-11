import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageAnimation } from "../animation";

const Policy = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Privacy Policy</h1>
      <h2>Who we are</h2>
      <p>
        This is the privacy policy for Charlotte Osborne Web Development.
        Website address is: <Link to="/">https://charlotteosborne.ca/</Link>
      </p>

      <h2>Cookies</h2>
      <p>
        Cookies are small text files that are used to store small pieces of
        information. They are stored on your device when the website is loaded
        on your browser. These cookies help us make the website function
        properly, make it more secure, provide better user experience, and
        understand how the website performs and to analyze what works and where
        it needs improvement.
      </p>
      <p>
        As most of the online services, this website uses first-party and
        third-party cookies for several purposes. First-party cookies are mostly
        necessary for the website to function the right way, and they do not
        collect any of your personally identifiable data.
      </p>
      <p>
        The third-party cookies used on our website are mainly for understanding
        how the website performs, how you interact with our website, keeping our
        services secure, providing advertisements that are relevant to you, and
        all in all providing you with a better and improved user experience and
        help speed up your future interactions with our website.
      </p>
      <p>
        These cookies store information like the number of visitors to the
        website, the number of unique visitors, which pages of the website have
        been visited, the source of the visit, etc. These data help us
        understand and analyze how well the website performs and where it needs
        improvement.
      </p>
    </motion.div>
  );
};

export default Policy;
