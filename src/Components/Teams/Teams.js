import React from 'react';
import Navbar from '../Navbar/Navbar';
import WebDesign from '../../images/teams/img-1.jpg'
import digitalMarketting from '../../images/teams/img-2.jpg'
import ArtDesign from '../../images/teams/img-3.jpg'
import Graphics from '../../images/teams/img-4.jpg'
import WebDevelopment from '../../images/teams/img-5.jpg'
import Photshop from '../../images/teams/img-6.jpg'



const Teams = () => {
    return (
        <div>
            <Navbar/>
            <h1>Our Teams</h1>
            <div className='row g-3'>
                <div className="col-md-4">
                <img width={200}  height={250} src={WebDesign} alt="" />
                <p>Web design Department</p>
                </div>
                <div className="col-md-4">
                <img width={200}  height={250} src={digitalMarketting} alt="" />
                <p>Degital Marketting Department</p>
                </div>
                <div className="col-md-4">
                <img width={200} height={250} src={ArtDesign} alt="" />
                <p>Art Design & typography Department</p>
                </div>
                <div className="col-md-4">
                <img width={200}  height={250} src={Graphics} alt="" />
                <p>Graphics Design Department</p>
                </div>
                <div className="col-md-4">
                <img width={200} height={250} src={WebDevelopment} alt="" />
                <p>Web and App  Development</p>
                </div>
                <div className="col-md-4">
                <img width={200}  height={250} src={Photshop} alt="" />
                <p>Adobe Photoshop Department</p>
                </div>
            </div>
           
        </div>
    );
};

export default Teams;

/* 
     <img width={200} src={WebDesign} alt="" />
                <img width={200} src={digitalMarketting} alt="" />
                <img width={200} src={ArtDesign} alt="" />
                <img width={200} src={Graphics} alt="" />
                <img width={200} src={WebDevelopment} alt="" />
                <img width={200} src={Photshop} alt="" />

*/