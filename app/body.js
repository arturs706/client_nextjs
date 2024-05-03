'use client';
import { useSelector } from "react-redux";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Navleft from "./components/navleft/Navleft";
import localFont from 'next/font/local';



const lufgaLight = localFont({ src: "../public/fonts/LufgaLight.ttf" })


function Body({ children, props }) {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    return (
      <body className={`${lufgaLight.className} ${darkMode ? `bodydark` : ''}`}>
        <Nav props={darkMode}/>
        <Navleft props={darkMode}/>
          {children}
        <Footer />
      </body>
    );
  }

export default Body;