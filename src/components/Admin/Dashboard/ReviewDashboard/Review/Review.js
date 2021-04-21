import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Review.css';

const Review = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const eventData = {
            name: data.name,
            company: data.company,
            description: data.description  
        }
        const url = `http://localhost:5000/addReview`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server site response'))
    }
    return (
        <section>
        <div>
            <div className="head-text mt-5">
                <h4 className="mb-4 mt-5 text-left text-sub rounded bg-light p-3">
                We Care for you, <span className="text-brand">Write something for us</span>
                </h4>
            </div>
            <div className="review-form text-left">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label for="name">
                        Your Name
                        <input type="text" className="form-control" name="name" {...register("name")} autoComplete="off" placeholder="Enter Name" />
                    </label>
                    <br/>
                    <label for="company">
                        Company/ Designation:
                        <input type="text" className="form-control" {...register("company")} name="company" placeholder="Company Name" />
                    </label>
                    <br/>
                    <label for="description">
                        Description
                        <textarea type="text" className="form-control" {...register("description")} rows="4"cols="50" name="description" placeholder="Say Something about us" />
                    </label>
                    <br/>
                    <Button type="submit" className="btn btn-success">Send</Button>
                </form>
            </div>
        </div>
        </section>
    );
};

export default Review;