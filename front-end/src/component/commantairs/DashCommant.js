import React from "react";
import Card from "./Commante";

export default function DashCommant() {
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
                <a href="/appartement">
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

              <li>
                <a href="/">
                  <span className="fas fa-arrow-right" />
                  <span>logout</span>
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
          <main>
            <Card />
          </main>
        </div>
      </div>
    </div>
  );
}
