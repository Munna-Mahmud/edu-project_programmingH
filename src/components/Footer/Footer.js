import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1 style={{color:"goldenrod"}}>Our Courses</h1>
                                <div className="icons-container d-flex text-center ">
                                </div>
                                <div className="mt-4 ">
                                <p >Computer Technology</p>
                            <p>Drawing</p>
                            <p>Mathematics</p>
                            <p>Chemistry Science</p>
                                </div>

                                <p className="mt-5">
                                    <small style={{color:"goldenrod"}}>Munna © . All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">Courses</li>
                                    <li className="footer-menu">Contact us</li>
                                    <li className="footer-menu"> About us</li>
                                    <li className="footer-menu"> Addmission</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4 style={{color:"goldenrod"}}>Contact us</h4>
                            <p>Number:+902374535</p>
                            <p>Email: learnermunna@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;