import React from "react";
import SocialIcons from "@components/shared/SocialIcons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black py-4">
      <SocialIcons />
      <h3 className="mt-4">
        Conjured by James Midzi | © {new Date().getFullYear()}
      </h3>
    </footer>
  );
}
