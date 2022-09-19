import { useCallback, useContext, useState } from "react";
import styles from "./index.module.scss";
import logo from "./logo.svg";
import menu from "./menu.svg";


import { ThemeContext } from "../../App";

import { useRef } from "react";


  
const Header = ({ children }) => {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const onHadleClick = useCallback(
    () => setDropdownVisibility(!isDropdownVisible),
    [isDropdownVisible]
  );
  const theme = useContext(ThemeContext);
  const navRef= useRef(null)

  const scrollToSection = (ref) =>
  window.scrollTo({
    behavior: "smooth",
    top: ref?.current?.offsetTop - navRef?.current?.offsetHeight,
  });
  const scrolltoTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <header className={styles.Header}>
      <nav ref={navRef} className={styles.navbar}>
        <section className={styles.logotype}>
          <img className={styles.img} src={logo} alt="logo" />
        </section>
        <section className={styles.side}>
          {children}
          <div className={styles.menu}>
            <img
              onClick={onHadleClick}
              className={styles.img}
              src={menu}
              alt="menu"
            />
          </div>
        </section>
      </nav>
      {isDropdownVisible && (
        <div className={styles.dropdown}>
          <ul>
            <li  onClick={()=>scrollToSection(theme.discoverRef)}>
              DISCOVER
            </li>
            <li   onClick={()=>scrollToSection(theme.filterRef)}>
              FILTER TOP RATED
            </li>

            <li   onClick={scrolltoTop}>
              BACK TO THE TOP
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
