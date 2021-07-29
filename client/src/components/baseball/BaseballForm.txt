import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


function BaseballForm(props) {
  const [input, setInput ] = useState('Mike Trout');


  const handleSubmit = (e) => {
    e.preventDefault();


    props.onSubmit({
      text: input,
    });

    setInput('');

  };

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="color-overlay text-center" id="baseballSearch">
  
    <Form className="mb-2" onSubmit={handleSubmit}>
        <Form.Row className="align-items-end">
        <Form.Label>Search MLB</Form.Label>
        <Form.Control type="text" placeholder="Search Player or Team" onChange={handleChange} value={input} name="title" />
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Row>
        <Button variant="primary" type="submit">
        Search
        </Button>
    </Form>
  
  </div>

  )
}

export default BaseballForm;