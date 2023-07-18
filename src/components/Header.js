import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";
import logo from "../images/logos/logo.svg";
import day from "../images/icons/day.svg";
import night from "../images/icons/night.svg";
import Nav from "./Nav";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const { headerHeight, setHeaderHeight } = useGlobalContext();
  const header = useRef();

  const handleScroll = () => {
    if (window.scrollY > headerHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    console.log("set to theme", theme);
  };

  const getTheme = () => {
    return localStorage.getItem("theme");
  };

  const toggleTheme = () => {
    const html = document.getElementsByTagName("html")[0];
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      html.classList.remove("dark-mode");
      setTheme("light");
    } else {
      html.classList.remove("dark-mode");
      html.classList.add("dark-mode");
      setTheme("dark");
    }
  };

  const setLocalTheme = () => {
    const html = document.getElementsByTagName("html")[0];
    const theme = getTheme();
    if (theme) {
      if (theme === "light") {
        html.classList.remove("dark-mode");
        setTheme("light");
      } else {
        html.classList.remove("dark-mode");
        html.classList.add("dark-mode");
        setTheme("dark");
      }
    } else {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMq) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  };

  useEffect(() => {
    setHeaderHeight(header.current.offsetHeight);
  }, []);

  useEffect(() => {
    setLocalTheme();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header ref={header} className={isSticky ? "sticky" : ""}>
        <div className="header-center">
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <div onClick={toggleTheme} className="theme-button">
            <img className="day" src={day} alt="day" />
            <img className="night" src={night} alt="night" />
          </div>
          <Nav position="header-nav"></Nav>
        </div>
      </header>
    </>
  );
}

export default Header;
