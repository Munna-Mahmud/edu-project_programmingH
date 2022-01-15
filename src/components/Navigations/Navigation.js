import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className="justify-content-center header_content">

            <Nav className="justify-content-center p-4 header" activeKey="/home">
                <div className="logo">
                    <h2>CREATIVE INSTITUTION</h2>
                </div>
                <Nav.Item>
                    <NavLink exact to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "goldenrod"

                        }}
                    > Home
                    </NavLink>

                </Nav.Item>
                <Nav.Item>
                    <NavLink exact to="/course"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "goldenrod"

                        }}
                    >Courses</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink exact to="/about"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "goldenrod"

                        }}
                    >About</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink exact to="/contact"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "goldenrod"

                        }}
                    >Contact US</NavLink>
                </Nav.Item>

                <Nav.Item>
                    <NavLink exact to="/admissions"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "goldenrod"

                        }}
                    >Admissions</NavLink>
                </Nav.Item>

            </Nav>
        </div>
    );
};

export default Navigation;