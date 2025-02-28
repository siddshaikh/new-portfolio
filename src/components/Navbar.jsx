import { useState } from "react";
import "./Navbar.css";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import MobileNav from "./mobile/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h1 className="logo">Sidd&apos;s Portfolio</h1>
          <ul>
            <li>
              <a className="menu-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#work-experience">
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" href="#contact">
                Contact Me
              </a>
            </li>
            <a
              className="contact-button"
              href="/sidd_resume.pdf"
              download="Sidd_Resume.pdf"
            >
              Resume
            </a>
          </ul>
          <button className="contact-button">
            <span style={{ fontSize: "1.8rem" }}>
              {openMenu ? <IoCloseOutline /> : <CiMenuFries />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
