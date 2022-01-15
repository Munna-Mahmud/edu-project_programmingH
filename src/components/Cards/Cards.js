import React from 'react';
import './Cards.css'

const Cards = (props) => {
    // console.log(props)
    const { Course, picture, info, Students, Contact } = props.service
    return (
        <div>
          
            <div className="cards ms-5">
                <img src={picture} alt="" />
                <h4>{Course}</h4>
                <p>{info}</p>
                <p style={{ color: 'goldenrod' }}>Phone: {Contact}</p>
                <h5>ToTal Students: {Students}</h5>
            </div>
         
        </div>
    );
};

export default Cards;