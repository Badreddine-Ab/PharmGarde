import React from "react";
import { useNavigate, Link } from "react-router-dom";
export default function LayoutDash({ children }) {
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <div>
        <input type="checkbox" id="nav-toggle" />
        <div className="sidebar">
          <div className="sidebar-brand">
            <h1>
              {" "}
              <span className="fab fa-asymmetrik"> </span> <span> PharGR</span>
            </h1>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li>
                <a href="#" className="active">
                  <span className="fas fa-tachometer-alt" />
                  <span>Dashboard</span>
                </a>
              </li>

              <li>
                <a href="">
                  <span className="fas fa-stream" />
                  <span>PharmGarde</span>
                </a>
              </li>

              <li>
                <a href="/commantair">
                  <span className="fas fa-boxes" />
                  <span>Commentaire</span>
                </a>
              </li>

              {/* <li>
                <a href="/">
                  <span className="fas fa-arrow-right" />
                  <span>logout</span>
                </a>
              </li> */}
              <li>
                <a href="">
                  <span onClick={logOut}>
                    <span className="fas fa-arrow-right" />
                    <span style={{ color: "var(--dk-gray-400)" }}>Logout</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <header>
            <h2>
              <label htmlFor="nav-toggle">
                <span className="fas fa-bars" />
              </label>
              Dashboard
            </h2>
            <div className="user-wrapper">
              <img
                src="https://bit.ly/3bvT89p"
                width="40px"
                height="40px"
                alt="profile-img"
              />
              <div className>
                <h4>Welcom</h4>
                <small>Super Admin</small>
              </div>
            </div>
          </header>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
