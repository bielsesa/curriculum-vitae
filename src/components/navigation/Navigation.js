import React, { Component } from 'react';
import { Link } from "@reach/router";
import profile from "../../img/prof-rounded-2.png"
import "./Navigation.css";

class Navigation extends Component {
    render() {
        return (
            <div>
                <img src={profile} alt="Author's profile" className="profile-img"/>
                <nav className="wrapper">
                    <Link className="menu-link" to="curriculum-vitae/home">Home</Link>
                    <Link className="menu-link" to="curriculum-vitae/about">About</Link>
                    <Link className="menu-link" to="curriculum-vitae/personal-projects">Personal Projects</Link>
                    <Link className="menu-link" to="curriculum-vitae/work-exp">Work Experience</Link>
                    <Link className="menu-link" to="curriculum-vitae/education">Education</Link>
                    <Link className="menu-link" to="curriculum-vitae/contact">Contact Info</Link>
                    <p>Made with <a href="https://reactjs.org/">React.js</a>! <i class="fab fa-react fa-2x"></i></p>
                </nav>
                
            </div>
        );
    }
}

export default Navigation;