import Signup from "./components/Signup";
import Login from "./components/Login";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import CareProducts from "./pages/CareProducts";
import Footer from "./components/Footer";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <NavigationBar />
      <Routes>
        {user && <Route path="/signup" exact element={<Signup />} />}
        <Route path="/" exact element={<Signup />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/care-products" element={<CareProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
