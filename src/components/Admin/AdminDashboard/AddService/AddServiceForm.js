import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddServiceForm.css';
const AddServiceForm = () => {
    const { register, handleSubmit } = useForm()

    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const eventData = {
            title: data.title,
            description: data.description,
            addPrice: data.addPrice,
            imageUrl: imageUrl
        }
        const url = `https://stormy-forest-84945.herokuapp.com/addPrograms`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server site response'))
    }
    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '170f5f7b4d8b940b8be493fbd846036d');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <div>
                <h3 className="mb-4 mt-5 text-left text-brand rounded bg-light p-3">
                    Add Service</h3>
            </div>

            <div className="addService">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="text">
                            <Form.Label className="text-label" >Add Title</Form.Label>
                            <Form.Control name="title"  {...register("title")} type="text" placeholder="Add Title" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="text">
                            <Form.Label className="text-label">Add Price</Form.Label>
                            <Form.Control name="addPrice" {...register("addPrice")} type="number" placeholder="Enter Price" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="text">
                            <Form.Label className="text-area">Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" {...register("description")} type="text" placeholder="Description" />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.File className="text-label" onChange={handleImageUpload} id="exampleFormControlFile1" label="Add Service Cover Photo" />
                        </Form.Group>
                    </Form.Row>
                    <div id="saveButton">
                        <Button type="submit">Save</Button>
                    </div>
                </Form>
            </div>

        </div>
    );
};

export default AddServiceForm;