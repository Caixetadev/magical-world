import Header from "@components/shared/Header";
import React, { ReactNode } from "react";
import { Fragment } from "react";

interface IProps {
  children: ReactNode;
}

export default function AppLayout({ children }: IProps) {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-lg  bg-green-900 py-12 px-8 shadow-lg sm:max-w-xl md:max-w-3xl md:px-16 md:py-20 lg:max-w-4xl">
        {children}
      </main>
    </>
  );
}
