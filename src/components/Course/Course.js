import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Course.css'

const Course = () => {
  const [services, setService] = useState([])
  useEffect(() => {
    fetch('./services.JSON')
      .then(res => res.json())
      .then(data => setService(data))
  }, []);
  // console.log(services)

  return (
    <div >

      <h1 className="text-center p-4 " style={{ color: 'goldenrod' }}>OUR COURSES</h1>
      <div className="service-menu">
        <div className="cards-container">
          {
            services.map(service => <Cards service={service}></Cards>)
          }

        </div>
      </div>

    </div>
  );
};

export default Course;