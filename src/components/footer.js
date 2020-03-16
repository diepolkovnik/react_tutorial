import React, { Component } from 'react';
import { CtxConsummer } from '../index';

class Footer extends Component {

  state = {
    name: 'Alex',
    age: 35,
    isLogin: false,
  }

  componentDidMount(){
    this.setState({name: 'My name'});    
  }
 
  changed = evt =>{
    this.setState({name: evt.target.value});
    console.log(this.state.name);
  }

  render(){

    // const animals = ['cat', 'dog', 'horse' ];

  return (
    <CtxConsummer>

      {(context) => (
        <div>
          { context.animals.map( animal => {
            return <p kay={animal.id}>{animal}</p>;
          }) }
        </div>
      )}

     

     
    </CtxConsummer>
  ) 
  }
}

export default Footer;