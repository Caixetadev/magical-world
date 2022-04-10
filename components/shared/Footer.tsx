import React from "react";
import SocialIcons from "@components/shared/SocialIcons";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-gray-900 py-4">
      <SocialIcons />
      <h3>Made by James Midsi | © {new Date().getFullYear()}</h3>
    </footer>
  );
}
