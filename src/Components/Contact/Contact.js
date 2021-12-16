import React from 'react';
import './Contact.css'
import { useForm } from "react-hook-form";
const Contact = () => {
    // const { register, handleSubmit, errors } = useForm();
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
       console.log(data)
    }
  
    return (
        <div className='bg' id="#contact">
            <div className="row">
                <div className="col-md-6 my-5 ">
                  <h1>Let us handle your project, <br /> professionally.</h1>
                  <p className='text-dark text-center'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6">
                <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                            <input name="name" className="form-control" placeholder="Your Name" {...register("name",{ required: true })} />
                            {errors.name && <span><p>This field is required</p></span>}

                            <input name="company" className="form-control mt-3" placeholder="Designation, Company Name" {...register("company",{ required: true })} />
                            {errors.company && <span><p>This field is required</p></span>}

                            <textarea rows="3" name="description" className="form-control mt-3" placeholder="Description" {...register("description",{ required: true })} />
                            {errors.description && <span><p>This field is required</p></span>}
                            <div className="d-flex flex-row bd-highlight mb-3">

                            <button type="Submit" className="btn btn-dark mt-2">Submit</button>

                            </div>
                        </form>
                </div>
            </div>
            <p className='text-dark'>Copyright Creative Agency 2021</p>
        </div>
    );
};

export default Contact