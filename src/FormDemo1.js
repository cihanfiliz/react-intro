import React, { Component } from 'react'

export default class FormDemo1 extends Component {
  state = { userName: '', city: '' };
  onChangeHandler = (event) => {
    let name = event.target.name;
    let city = event.target.value;
    this.setState({ [name]: city });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.userName);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>User Name</h3>
          <input name='userName' onChange={this.onChangeHandler} type='text' />
          <h3>User name is {this.state.userName}</h3>

          <h3>City Name</h3>
          <input name='city' onChange={this.onChangeHandler} type='text' />
          <h3>City name is {this.state.city}</h3>

          <input type='submit' value='save' />
        </form>
      </div>
    )
  }
}
