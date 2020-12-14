import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import profile from "../../img/prof-rounded.png"
import "./Navigation.css";

class Navigation extends Component {
    render() {
        return (
            <div>
                <img src={profile} alt="Author's profile" className="profile-img"/>
                <nav className="wrapper">
                    <Link className="menu-link" to="/">Home</Link>
                    <Link className="menu-link" to="about">About</Link>
                    <Link className="menu-link" to="personal-projects">Personal Projects</Link>
                    <Link className="menu-link" to="work-exp">Work Experience</Link>
                    <Link className="menu-link" to="education">Education</Link>
                    <Link className="menu-link" to="contact">Contact Info</Link>
                    <p>Made with <a href="https://reactjs.org/">React.js</a>! <i class="fab fa-react"></i></p>
                </nav>
                
            </div>
        );
    }
}

export default Navigation;