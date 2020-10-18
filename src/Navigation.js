import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    
    render(){
        let link1;
        let link2;
        let link3;
        let link4;
        let link5;

        link1 = <Link to="Homepage">Home Page</Link>;
        link2 = <Link to="Painting1">Painting 1</Link>;
        link3 = <Link to="Painting2">Painting 2</Link>;
        link4 = <Link to="Painting3">Painting 3</Link>;
        link5 = <Link to="Blink">Blink</Link>;
        
        return(
            <nav id="naive">
                <div> {link1} </div>
                <div> {link2} </div>
                <div> {link3} </div>
                <div> {link4} </div>
                <div> {link5} </div>
            </nav>
        )
    }
}

export default Navigation
