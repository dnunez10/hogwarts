import React, { Component } from "react";
import Pig from './Pig'

class HelloWorld extends Component {
  render() {
    return (
      <div className='ui grid container'>
        {this.props.hogsData.map( hog => <Pig key={hog.name} hog={hog}/> )}
      </div>
    );
  }
}

export default HelloWorld;

