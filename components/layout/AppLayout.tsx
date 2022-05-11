import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

/* 
className="mx-auto min-h-screen max-w-lg  bg-green-900 py-12 px-8 shadow-lg sm:max-w-xl md:max-w-3xl md:px-16 md:py-20 lg:max-w-4xl
*/

export default function AppLayout({ children }: IProps) {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-2xl bg-green-900 py-10 px-8 sm:py-12 md:pb-20">
        {children}
        {/* sm:px-12 sm:py-16 */}
      </main>
      <Footer />
    </>
  );
}
