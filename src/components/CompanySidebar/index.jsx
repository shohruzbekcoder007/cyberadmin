import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

export default function CompanySidebar() {
    return (
        <>
            <nav className="sidebar sidebar-offcanvas">
                <div className="nav">
                    <NavLink 
                        to="company"
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"
                        }
                    >
                        <span className="nav-link">
                            <i className="ti-shield menu-icon"></i>
                            <span className="menu-title">Mening kompaniyam</span>
                        </span>
                    </NavLink>
                    <NavLink 
                        to="application" 
                        className={({ isActive }) =>
                            isActive ? "nav-item active" : "nav-item"
                        }
                    >
                        <span className="nav-link">
                            <i className="ti-file menu-icon"></i>
                            <span className="menu-title">Arizalar</span>
                        </span>
                    </NavLink>
                    <NavLink
                        to="reports" 
                        className={({ isActive }) =>
                        isActive ? "nav-item active" : "nav-item"
                    }
                    >
                        <span className="nav-link" data-bs-toggle="collapse" aria-expanded="false" aria-controls="auth">
                            <i className="ti-clip menu-icon"></i>
                            <span className="menu-title">Hisobot</span>
                            <i className="menu-arrow"></i>
                        </span>
                        
                    </NavLink>
                    <div className="collapse" id="auth">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <a className="nav-link" href="./quarter.html"> Choraklik hisobot </a></li>
                                <li className="nav-item"> <a className="nav-link" href="./auditor.html"> Auditorlik xulosasi </a></li>
                                <li className="nav-item"> <a className="nav-link" href="./monthly.html"> Oylik daromad </a></li>
                            </ul>
                        </div>
                </div>
            </nav>
        </>
    )
}
