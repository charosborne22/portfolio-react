export const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const PageAnimation = {
  hidden: {
    y: "50%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.5 },
  },
  exit: {
    y: "50%",
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};
