import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  linebreak?: boolean;
}

const linebreakStyles = "mt-20 md:mt-24";

export default function Section({ children, linebreak = false }: IProps) {
  return (
    <section
      className={`text-green-100 ${linebreak ? linebreakStyles : "mt-16"}`}
    >
      {children}
    </section>
  );
}
