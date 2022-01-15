import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div>
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-12">
            <h1 className="title">
             GET YOUR <span className="Edu-title">EDUCATION TODAY</span>
            </h1>
            <p className="text-white text-center mt-3 fs-5 " style={{fontFamily:"sans-serif"}}>
            Come along to discover our range of courses, meet our subject specialist tutors, have a look  around our facilities and ask as many questions as you like! <br /> We offers best of best quality Courses learn and shear your knowledge .  Although college is about being more independent,  <br /> the tutors are there for us if we need them. The tutors are really approachable and friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;