import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Blink from './Blink';
import Painting1 from './Painting1';
import Painting2 from './Painting2';
import Painting3 from './Painting3';

ReactDOM.render(<App />, document.getElementById('div1'));
ReactDOM.render(<Blink />, document.getElementById('div2'));
ReactDOM.render(<Painting1 />, document.getElementById('div3'));
ReactDOM.render(<Painting2 />, document.getElementById('div4'));
ReactDOM.render(<Painting3 />, document.getElementById('div5'));

