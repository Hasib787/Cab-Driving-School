import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import './MakeAdminForm.css';

const MakeAdminForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const eventData = {
            email: data.email,
        }
        const url = `https://stormy-forest-84945.herokuapp.com/makeAdmin`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server site response'))
    }
    return (
        <div>
            <div>
                <h3 className="mb-4 mt-5 text-left text-brand rounded bg-light p-3">
                    Make Admin</h3>
            </div>
            <div>
                <Form className="m-3" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="text">
                            <Form.Label className="text-label" >Make Admin</Form.Label>
                            <Form.Control name="email"  {...register("email")} type="email" placeholder="Enter Email" />
                        </Form.Group>
                    </Form.Row>
                    <br/>
                    <div>
                        <Button type="submit">Make Admin</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default MakeAdminForm;