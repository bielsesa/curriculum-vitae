import React, { Component } from 'react';
import "./Contact.css";

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact Information</h1>
                <p>Here's how you can reach me! Don't hesitate to contact me for any inquiries.</p>
                <table>
                    <tr>
                        <td>E-mail:</td>
                        <td><span className="info">bielsesa@gmail.com</span></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><span className="info">+34 649 60 93 47</span></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                <p>
                    <a href="https://twitter.com/bielsesa"><i class="fab fa-twitter fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/biel-serrano-s%C3%A1nchez-13ba05170/"><i class="fab fa-linkedin fa-2x"></i></a>
                    <a href="https://github.com/bielsesa"><i class="fab fa-github fa-2x"></i></a>
                </p>
            </div>
        );
    }
}

export default Contact;