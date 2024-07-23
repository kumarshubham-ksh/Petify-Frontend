import React from "react";
import { Link, useLocation } from "react-router-dom";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const NavigationBar = () => {
  const location = useLocation();
  const hideNavbar = ["/", "/signup", "/login"].includes(location.pathname);

  if (hideNavbar) {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          Petify
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pets">
                Pets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/care-products">
                Care Products
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
