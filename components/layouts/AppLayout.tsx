import React from "react";
import { Fragment } from "react";

export default function AppLayout({ children }: any) {
  return (
    <Fragment>
      <header className="sticky inset-0 mx-auto space-x-4 bg-gray-900  p-4   text-center text-xl text-gray-100">
        <a href="/" className=" mr-2 ">
          Home
        </a>
        <a href="/potions">Potions</a>
        <a href="/spells">Spells</a>
        <a href="/parchment">Parchment</a>
        <a href="/owl">Owl</a>
      </header>
      <main className="mx-auto min-h-screen max-w-[60rem] bg-green-900 p-12 shadow-xl">
        {children}
      </main>
    </Fragment>
  );
}
