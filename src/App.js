import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import styled from 'styled-components';
import Numbers from './components/numbers';




function createAlert(){
  alert('hello. You clicked me');
}

function ShowMessage(props){
  if (props.toShow) {
    return <h2>my message</h2>
  } else {
    return <h2>Forbidden</h2>
  }
  
}

const pStyle = {
  fontSize: '2em',
  color: 'red'
}

const Paragraph = styled.p`
  font-size: 3em;
  color: green;
`;

function App() {
  return (
    <div className="App">
      <Header info="this is my message" number="6"/>
      <p style={pStyle}>main content</p>
      <Paragraph>New style</Paragraph>
      <Footer trademark="my trade mark" myalert={createAlert}/>
      <ShowMessage toShow={true} />
      <Numbers></Numbers>
    </div>
  );
}

export default App;
