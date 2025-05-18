"use client";

import { useState, useEffect } from "react";
import "./Header.css";

const Header = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: "Sobre", href: "#about" },
    { name: "Experiências", href: "#experience" },
    { name: "Educação", href: "#education" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <a href="#home">pm</a>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
