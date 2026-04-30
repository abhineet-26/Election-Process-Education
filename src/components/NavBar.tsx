"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "news", label: "News" },
  { id: "process", label: "Process" },
  { id: "why-vote", label: "Why Vote" },
  { id: "assistant", label: "Assistant" },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`${styles.navContainer} glass-panel`}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`${styles.navLink} ${activeSection === item.id ? styles.active : ""}`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
