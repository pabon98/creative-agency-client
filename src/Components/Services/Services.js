import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const[services,setServices] = useState([])
    useEffect(()=>{
     fetch('http://localhost:5000/services')
     .then(res=>res.json())
     .then(data=>setServices(data))
    },[])
    return (
        <div className='container'>
            <h1>Provide Awesome <span className='text-success'>Services </span></h1>
            <div className="row mt-5">
                {
                    services.slice(0,3).map(service=><Service
                    service={service}
                    >
                    </Service>)
                }
            </div>

        </div>
    );
};

export default Services;