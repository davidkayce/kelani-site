const hoverAnimation: string =
  "hover:scale-[0.96] transition-all  ease-in-out duration-100 hover:cursor-pointer";
export const toSentenceCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/(^\w|\.\s+\w)/g, (letter) => letter.toUpperCase());
};

const animations = {
  hoverAnimation,
};

export default animations;
