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

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function PageLayout({ children, pageMeta }: Props) {
  return (
    <>
      <Meta pageMeta={pageMeta} />

      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
    </>
  );
}
