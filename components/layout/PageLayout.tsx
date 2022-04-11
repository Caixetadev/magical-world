import { motion } from "framer-motion";
import { ReactNode } from "react";
import Meta from "@components/shared/Meta";

interface PageMeta {
  title: string;
  description?: string;
}

interface Props {
  children: ReactNode;
  pageMeta: PageMeta;
}

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 },
// };

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -200, y: 0 },
};

export default function PageLayout({ children, pageMeta }: Props) {
  return (
    <>
      <Meta pageMeta={pageMeta} />

      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        className="mx-auto max-w-2xl "
      >
        {children}
      </motion.div>
    </>
  );
}
