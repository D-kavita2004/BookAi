import { useState } from "react";
import "../styles/Header.css";
import logo_url from "../assets/bookai-logo.jpg"

const Header = () => {
   const [mode,setMode] = useState("🌞");
   const changeMode = () => {
      if (mode === "🌞") {
         setMode("🌑");
         document.body.style.backgroundColor = "#110101";  // Dark mode background
         document.body.style.color = "#ffffff";           // Dark mode text color
      } else {
         setMode("🌞");
         document.body.style.backgroundColor = "#ffffff";  // Light mode background
         document.body.style.color = "#000000";           // Light mode text color
      }
   };
   return(
      <header className="header">
         <div id="logo-container">
            <div id="logo-icon"></div>
            <div className="img-logo">
                <img src={logo_url}></img>
            </div>
           <h1>BookAI</h1>
         </div>
         <nav className="nav-bar">
               <a href="#features">Features</a>
               <a href="#how-it-works">How It Works</a>
               <a href="#roadmap">Roadmap</a>
               <a href="#api">API</a>
               <a href="#pricing">Price</a>
               <a href="#models">Models</a>
               <div className="mode" onClick={changeMode}>{mode}</div>
               <button className="btn">Login/Sign Up</button>
         </nav>
      </header>
   )
}
export default Header;