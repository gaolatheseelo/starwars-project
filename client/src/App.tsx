import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Component Imports
import Navbar from "./components/navbar";
//import Footer from "./components/footer";

//Rendering Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Tools from "./pages/Tools/Tools";
 import Search from "./pages/Search";
// import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Navbar />
        <div className="App">
        <Routes>
          <Route path="/" element={<Home />} >
         <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/search" element={<Search />} /></Route>
           {/*<Route path="/profile/:name" element={<Profile />}></Route>*/}
        </Routes>
      </div> 
    </Router>
  );
}

export default App;

