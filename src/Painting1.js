import React from 'react';
import './Painting1.css';

class Painting1 extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#DDDDDD';
    ctx.fillRect(0, 0, 600, 600);

    class Dot {
      constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.color = c;
        this.randinc_x = (Math.random() * 4.0) - 2.0;
        this.randinc_y = (Math.random() * 4.0) - 2.0;
        this.incOfInc_x = (Math.random() * 0.5) - 0.25;
        this.incOfInc_y = (Math.random() * 0.5) - 0.25;
        this.move();
      }
      setColor() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 5, 5);
      }
      move() {
        if(Math.random() * 1000 < 100) {
          this.randinc_x = this.randinc_x + this.incOfInc_x;
        }
        if(Math.random() * 1000 < 100) {
          this.randinc_y = this.randinc_y + this.incOfInc_y;
        } 
        this.x += this.randinc_x;
        this.y += this.randinc_y;
      }
    }
    let dotArray = [];
    let cChoice;
    let numOfLines = 30;

    for (let i = 0; i < numOfLines; i++) {
      cChoice = Math.random() * 100;
      let rc = 0;
      if (cChoice < 50) {
        rc = "#000000";
      } else {
        rc = "#FF0000";
      }
      let rx = 300;
      let ry = 260;
      let d = new Dot(rx, ry, rc);
      dotArray.push(d);
    }

    for (let h = 0; h < 1000; h++) {
      for (let i = 0; i < numOfLines; i++) {
        dotArray[i].setColor();
        dotArray[i].move();
      }
    }
  }
  render() {
    return (<div id='cancentr'>
      <div>
        <canvas ref = {this.canvasRef}
        width = {600} height = {600} />
      </div>
      <div>
        <button onClick={()=>{this.updateCanvas()}}>New Painting Variation</button>
      </div>
    </div>);
  }
}

export default Painting1;
