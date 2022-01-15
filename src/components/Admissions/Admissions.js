import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Admission.css'

const Admissions = () => {
    return (
        <div>
            <h1 className="p-4 " style={{fontSize:"50px", fontFamily:"serif"}}>ADMISSIONS</h1>
            <p className="ms-4 fs-5 ">Learn more about the courses we offer, and find out how to make an application to join us.</p>
            <img className="w-100 cover fluid admission-img " src="https://images.pexels.com/photos/1130683/pexels-photo-1130683.jpeg?cs=srgb&dl=pexels-david-jakab-1130683.jpg&fm=jpg" alt="" />
            <h1 className=" p-3 w-50 bg-success text-white ">Study at Creative Instiution :</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                        <Card.Title className="fs-4">Undergraduate study</Card.Title>
                        <Card.Text>
                        Discover what life is really like as an Oxford student, including the courses we offer and how to apply.
                        </Card.Text>
                        <ul className="adm-ul">
                            <li>Discover student life.</li>
                            <li>Find out what undergraduate courses we offer.</li>
                            <li>Explore the different collegesver student life.</li>
                            <li>Find out how to apply for undergraduate courses</li>
                            <li>Visit Us</li>
                        </ul>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 22 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/5940827/pexels-photo-5940827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Card.Body>
                        <Card.Title className="fs-4">Graduate</Card.Title>
                        <Card.Text>
                        We offer a unique experience to graduate students. Find out about our postgraduate courses and how to apply.{' '}
                        </Card.Text>
                        <ul className="adm-ul">
                            <li>Find out what postgraduate courses we offer.</li>
                            <li>Learn about postgraduate college life.</li>
                            <li>Find out how to apply for postgraduate courses</li>
                            <li>Up to 1,000 graduate scholarships are available</li>
                            <li>Information for international applicants</li>
                        </ul>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 6 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Card.Body>
                        <Card.Title className="fs-4">School Level</Card.Title>
                        <Card.Text>
                       Childerns learning: more than 1000 part-time courses and programmes offered each year.
                        </Card.Text>
                        <ul className="adm-ul">
                            <li>Undergraduate qualifications</li>
                            <li>Short online COurses</li>
                            <li>Visit US</li>
                            <li>Summer Schools</li>
                            <li>Continuing professional development</li>
                        </ul>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 43 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div>
    );
};

export default Admissions;