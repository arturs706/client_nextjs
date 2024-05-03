"use client"; // this is a client component 👈🏽
import styles from "./nav.module.css";
import Image from "next/image";
import logo from "../../../public/images/home.svg";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  logout,
  selectIsLoggedIn,
  selectUserRole,
} from "../../../redux/authSlice";
import dark_active from "../../../public/images/dark_active.svg";
import dark_inactive from "../../../public/images/dark_inactive.svg";
import light_active from "../../../public/images/light_active.svg";
import light_inactive from "../../../public/images/light_inactive.svg";
import { toggleDarkMode } from "../../../redux/darkModeSlice";

export default function Nav() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  const toggleMode = () => {
    return () => {
      dispatch(toggleDarkMode());
    };
  };

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src={logo} width="35" alt="logo" priority={true} />
      </Link>

      <div className={styles.wrapper}>
        <div 
        className={`${darkMode ? styles.modewrapper : styles.modewrapperlight}`}

        >
          <Image
            src={darkMode ? dark_active : dark_inactive}
            width="20"
            alt="mode_toggle"
            priority={true}
            onClick={toggleMode()}
          />
          <Image
            src={darkMode ? light_inactive : light_active}
            width="20"
            alt="mode_toggle"
            priority={true}
            onClick={toggleMode()}
          />
        </div>
        <Link
          href="/login"
          className={`${darkMode ? styles.darkmode : styles.lightmode}`}
        >
          LOGIN
        </Link>
      </div>
    </nav>
  );
}
