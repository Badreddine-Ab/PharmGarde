import React from 'react'
import Table from './Table'
import './sash.css';

export default function dash() {
  return (
    <div>
    
    <div>
        <input type="checkbox" id="nav-toggle" />
        <div className="sidebar">
            <div className="sidebar-brand">
                <h1> <span className="fab fa-asymmetrik"> </span> <span>PharmGarde</span>
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
                            <span>pharmaciers</span>
                        </a>
                    </li>

                    <li>
                    <a href="">
                        <span className="fas fa-stream" />
                        <span>commantair</span>
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
                    <img src="https://bit.ly/3bvT89p" width="40px" height="40px" alt="profile-img" />
                    <div className>
                        <h4>Welcom</h4>
                        <small>Super Admin</small>
                    </div>
                </div>
            </header>
            <main>
               
                <Table />

            </main>
        </div>
    </div>
    
    </div>
  )
}
