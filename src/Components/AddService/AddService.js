import axios from 'axios';
import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://creative-agency-server-9jtj.onrender.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
        <h2 className='text-center'>Add New Service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description" />
            <input type="text" {...register("price", { pattern: /^[0-9]+(\.[0-9]{1,2})?$/ })} placeholder="price" />

            <input {...register("image")} placeholder="image url" />
            <input className='btn btn-dark' type="submit" />
        </form>
    </div>
);
};
export default AddService;