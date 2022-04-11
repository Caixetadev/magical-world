import React from "react";
import SocialIcons from "@components/shared/SocialIcons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-900 py-4">
      <SocialIcons />
      <h3 className="mt-4">
        Made by James Midzi | © {new Date().getFullYear()}
      </h3>
    </footer>
  );
}
