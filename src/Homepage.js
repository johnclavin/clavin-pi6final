import React from 'react';
import './Homepage.css';

class Homepage extends React.Component {

  render() {
    return ( <div id="centr">
    <h1>Welcome to Algorithmic Jazz</h1>
    <br></br>
    <h3>Algorithmic Art by John Clavin</h3>
    <br></br>
    <p>Select one of the 3 paintings on the left and use 
      the button at the bottom to create new variations.</p>
    <p>If you find one that you like, hit the save button 
      and that painting will be saved in your account.</p>
    </div>);
  }
}

export default Homepage;
