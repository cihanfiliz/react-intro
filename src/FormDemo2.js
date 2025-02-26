import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'

export default class FormDemo2 extends Component {
  state = { email: '', password: '', city: '', description: '' };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.email + ' added to cart!');
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <label for='email' >Email</label>
            <Input type='email' name='email' placeholder='Enter email' id='email' onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <label for='password' >Password</label>
            <Input type='password' name='password' placeholder='Enter password' id='password' onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <label for='description' >Description</label>
            <Input type='textarea' name='description' placeholder='Enter description' id='description' onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <label for='city' >City</label>
            <Input type='select' name='city' placeholder='Enter city' id='city' onChange={this.handleChange} >
              <option>Ankara</option>
              <option>Istanbul</option>
              <option>Munich</option>
              <option>Izmir</option>
              <option>Mugla</option>
            </Input>
          </FormGroup>
          <Button type='submit'>Save</Button>
        </Form>
      </div>
    )
  }
}
