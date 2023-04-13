import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Review.css';
const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-review">
        <h2 className='text-center'>Please Add Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
             <input {...register("imageUrl")} placeholder="Image URL" />
            <input {...register("title", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("comments")} placeholder="Comments" />
            <input type="number" {...register("rating")} placeholder="Rating" />
            
            <input className='btn btn-dark' type="submit" />
        </form>
    </div>
);
};

export default Review;