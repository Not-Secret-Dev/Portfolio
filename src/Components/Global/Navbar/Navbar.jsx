import styled from "styled-components";
import { FaLaptopCode } from "react-icons/fa6";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import { useState, useEffect } from "react";

const NavbarComponent = styled.nav`
  height: 7vmin;
  min-height: 60px;
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #101621;
  color: #fefefe;
  font-family: "Inter", sans-serif;
  font-weight: normal;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;

  /* Add scroll effect */
  &.scrolled {
    background-color: rgba(16, 22, 33, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .logo-container {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    cursor: pointer;
    z-index: 1001;

    span {
      color: #3878f0;
    }

    .icon {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      color: #2369ec;
      padding: 6px;
      transition: all 0.3s ease;
    }

    .logo-text {
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }

    &:hover {
      .icon {
        background: rgba(56, 120, 240, 0.2);
        border-color: rgba(56, 120, 240, 0.4);
        transform: rotate(5deg);
      }

      .logo-text span {
        text-shadow: 0 0 10px rgba(56, 120, 240, 0.5);
      }
    }
  }

  .nav-links {
    display: flex;
    justify-content: center;
    gap: 23px;
    font-size: 0.9rem;
    color: #efefef;

    @media (max-width: 768px) {
      display: none;
    }

    li {
      list-style-type: none;
      position: relative;
      display: inline-block;
      padding: 12px 0;
      transition: color 0.2s;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #3878f0;
        transition: width 0.3s ease;
      }

      &:hover {
        cursor: pointer;
        color: #3878f0;

        &::after {
          width: 100%;
        }
      }
    }
  }

  .resume-btn {
    width: 100px;
    height: 35px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    font-weight: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(56, 120, 240, 0.2);
      border-color: rgba(56, 120, 240, 0.4);
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .hamburger-menu {
    display: none;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1001;
    padding: 5px;
    border-radius: 5px;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  /* Mobile Menu Overlay */
  .mobile-menu-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    z-index: 999;
    opacity: 0;
    transition: opacity 0.3s ease;

    &.open {
      display: block;
      opacity: 1;
    }
  }

  /* Mobile Menu Content */
  .mobile-menu {
    display: none;
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background: rgba(16, 22, 33, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 80px 30px 30px;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    z-index: 1000;
    transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.1);

    &.open {
      display: flex;
      right: 0;
    }

    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      align-items: center;

      li {
        list-style-type: none;
        width: 100%;
        text-align: center;
        padding: 15px 0;
        font-size: 1.1rem;
        color: #efefef;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;

        &:last-child {
          border-bottom: none;
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(56, 120, 240, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        &:hover {
          cursor: pointer;
          color: #3878f0;
          padding-left: 15px;
          transform: translateX(5px);

          &::before {
            left: 100%;
          }

          &::after {
            content: "→";
            position: absolute;
            left: 10px;
            opacity: 1;
            animation: slideIn 0.3s ease forwards;
          }
        }
      }
    }

    .mobile-resume-btn {
      width: 100%;
      max-width: 200px;
      height: 45px;
      background: linear-gradient(
        135deg,
        rgba(56, 120, 240, 0.2),
        rgba(56, 120, 240, 0.4)
      );
      border: 1px solid rgba(56, 120, 240, 0.4);
      color: #fff;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 8px;
      cursor: pointer;
      margin-top: 20px;
      transition: all 0.2s ease;

      &:hover {
        background: linear-gradient(
          135deg,
          rgba(56, 120, 240, 0.3),
          rgba(56, 120, 240, 0.5)
        );
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(56, 120, 240, 0.3);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .nav-links {
      gap: 15px;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 60px;
    padding: 12px 20px;

    /* Make navbar more compact on mobile */
    &.scrolled {
      background-color: rgba(16, 22, 33, 0.98);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
    }

    .logo-container {
      .logo-text {
        font-size: 1.1rem;
      }

      .icon {
        padding: 5px;
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    min-height: 55px;

    .logo-container .logo-text {
      font-size: 1rem;
    }

    .hamburger-menu {
      font-size: 1.4rem;
    }

    .mobile-menu {
      width: 85%;
      padding: 70px 25px 25px;
    }
  }

  @media (max-width: 320px) {
    padding: 8px 12px;

    .mobile-menu {
      width: 90%;
      padding: 65px 20px 20px;
    }
  }

  /* Prevent navbar from being transparent when mobile menu is open */
  &.mobile-menu-open {
    background-color: #101621 !important;
    backdrop-filter: none !important;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Add/remove class for mobile menu open state
    if (isMenuOpen) {
      document.body.classList.add("mobile-menu-open");
      document.querySelector("nav").classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
      document.querySelector("nav").classList.remove("mobile-menu-open");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const handleResumeClick = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <NavbarComponent
      className={`${isScrolled ? "scrolled" : ""} ${
        isMenuOpen ? "mobile-menu-open" : ""
      }`}
    >
      <div
        className="logo-container"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaLaptopCode className="icon" />
        <div className="logo-text">
          Aayan<span>.dev</span>
        </div>
      </div>

      <ul className="nav-links">
        <li onClick={() => handleNavClick("about")}>About</li>
        <li onClick={() => handleNavClick("skills")}>Skills</li>
        <li onClick={() => handleNavClick("experience")}>Experience</li>
        <li onClick={() => handleNavClick("contact")}>Contact</li>
      </ul>

      <button className="resume-btn" onClick={handleResumeClick}>
        <LuDownload className="icon" />
        Resume
      </button>

      <button
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <LuX /> : <LuMenu />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Content */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          <li onClick={() => handleNavClick("about")}>About</li>
          <li onClick={() => handleNavClick("skills")}>Skills</li>
          <li onClick={() => handleNavClick("experience")}>experience</li>
          <li onClick={() => handleNavClick("contact")}>Contact</li>
        </ul>
        <button className="mobile-resume-btn" onClick={handleResumeClick}>
          <LuDownload />
          Download Resume
        </button>
      </div>
    </NavbarComponent>
  );
};

export default Navbar;
