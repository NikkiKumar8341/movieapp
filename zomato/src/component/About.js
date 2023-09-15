import React, { Component } from 'react';
import UserClass from './UserClass';

class About extends Component {

  constructor(props){
    super(props);


    console.log("parent Constructor");
  }

  componentDidMount(){
    console.log("parent component Did Amount");
  }

  render() {

    console.log("Parent render");
    return (
      <div>
        <h1>About Component </h1>
        <h2> This is Namaste React Web Series</h2>
        <UserClass  name={"Nikhil"}  location={"Warangal"}/>
        <UserClass  name={"second"}  location={"us"}/>
      </div>
    );
  }
}

export default About;