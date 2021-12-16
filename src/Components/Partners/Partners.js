import React from 'react';
import slack from '../../images/logos/slack.png'
import google from '../../images/logos/google.png'
import uber from '../../images/logos/uber.png'
import netflix from '../../images/logos/netflix.png'

const Partners = () => {
    return (
        <div className='my-4 container'>
            <h1>Our Partners</h1>
           <div className='d-flex my-4'>
           <div className="col-md-3">
               <img width="220px" className='' src={slack} alt="" />
           </div>
           <div className="col-md-3">
            <img width="200px" className='' src={google} alt="" />
           </div>
           <div className="col-md-3">
            <img width="150px" className='' src={uber} alt="" />
           </div>
           <div className="col-md-3">
            <img width="150px" className='' src={netflix} alt="" />
           </div>
           </div>
        </div>
    );
};

export default Partners;