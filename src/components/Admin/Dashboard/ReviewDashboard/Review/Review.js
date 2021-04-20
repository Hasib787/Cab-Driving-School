import React from 'react';
import { Button } from 'react-bootstrap';
import './Review.css';

const Review = () => {
    return (
        <section>
        <div>
            <div className="head-text mt-5">
                <h4 className="mb-4 mt-5 text-left text-sub rounded bg-light p-3">
                We Care for you, <span className="text-brand">Write something for us</span>
                </h4>
            </div>
            <div className="review-form text-left">
                <form>
                    <label for="name">
                        Your Name
                        <input type="text" className="form-control" name="name" autoComplete="off" />
                    </label>
                    <br/>
                    <label for="company">
                        Company/ Designation:
                        <input type="text" className="form-control" name="company" />
                    </label>
                    <br/>
                    <label for="description">
                        Description
                        <textarea type="text" className="form-control" rows="4"cols="50" name="description" />
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