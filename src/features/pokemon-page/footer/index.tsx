import React from "react";
import "./style.scss";

export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="footer">
      {children}
    </footer>
  );
}
