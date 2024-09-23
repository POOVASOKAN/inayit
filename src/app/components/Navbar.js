"use client"; // Mark this component as a Client Component

import { useState } from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <img src="/fav.png" alt="Logo" className="navbar__logo-img" />
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <MenuIcon />
      </div>

      {/* Links that will be toggled on mobile */}
      <div className={`navbar__links ${isMenuOpen ? "active" : ""}`}>
        <Link href="/" className="navbar__link">
          Home
        </Link>
        <Link href="/about" className="navbar__link">
          About Us
        </Link>
        <Link href="/services" className="navbar__link">
          Services
        </Link>
      </div>

      <Button variant="contained" className="navbar__contact-button">
        Contact Us
      </Button>
    </nav>
  );
}
