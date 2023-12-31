import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BounceText = ({ text, delay }: { text: string; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delaytime = (delay && delay * 1000) || 0;

    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, delaytime);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  const string = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.05 * i },
    }),
  };

  const wordAnimate = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -1000,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      {isVisible && (
        <motion.div
          className={`flex w-full h-fit flex-wrap gap-[5px] items-center justify-center`}
          variants={container}
          initial="hidden"
          whileInView="visible"
          animate="visible"
          layout
        >
          {string.map((word, i) => {
            const letter = word.split("");
            return (
              <span className="flex ml-3" key={i}>
                {letter.map((letter, index) => (
                  <motion.p className="h1" variants={wordAnimate} key={index}>
                    <span>{letter}</span>
                  </motion.p>
                ))}
              </span>
            );
          })}
        </motion.div>
      )}
    </>
  );
};

export default BounceText;
