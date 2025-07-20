import { useState } from "react";
import "./App.css";
import { Navbar } from "./day02/ReusableNavbar";
import { Footer } from "./day02/ReusableFooter";
import { Card } from "./day02/ReusableProfileCard";
import { MyApp } from "./day02/ReusableProfileCard";
import Practice from "./Practice";
import SlideFlowLandingPage from "./SlideFlow/SlideFlowLandingPage";
import Deleteme from "./Deleteme";
import BgChanger from "./bgChanger/BgChanger";

function App() {
  return (
    // day01
    // <div class= "flex items-center justify-center h-screen bg-teal-900">
    //   <h1 class="text-3xl font-bold text-white">Hello React 👋</h1>
    // </div>

    // day02
    // <div>
    //   <Navbar/>
    //   <Footer/>
    //   <MyApp/>
    // </div>

    // day03
    // <Practice />
    // <SlideFlowLandingPage/>
    // <Deleteme />
    <BgChanger />
  );
}

export default App;
