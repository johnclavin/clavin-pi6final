import React from 'react';
import './Painting3.css';

class Painting3 extends React.Component {
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
    ctx.fillStyle = '#F5F5F5';
    ctx.fillRect(0, 0, 600, 600);

    function drawArt() {
      if (Math.random() * 100 < 50) { // most likely choice
        drawLine(10, rndPos(300), 590, rndPos(300), rndColor()); // center horz
        drawLine(rndPos(300), 10, rndPos(300), 590, rndColor()); // center vert
        drawLine(rndPos(150), 10, rndPos(150), 590, rndColor()); // left
        drawLine(rndPos(450), 10, rndPos(450), 590, rndColor()); // right
        drawLine(10, rndPos(150), 590, rndPos(150), rndColor()); // top
        drawLine(10, rndPos(450), 590, rndPos(450), rndColor()); // bottom
      } else if (Math.random() * 100 < 50) {
        drawLine(rndPos(300), 10, rndPos(300), 590, rndColor()); // center vert
        drawLine(10, rndPos(300), 590, rndPos(300), rndColor()); // center horz
        drawLine(10, rndPos(150), 590, rndPos(150), rndColor()); // top
        drawLine(10, rndPos(450), 590, rndPos(450), rndColor()); // bottom
        drawLine(rndPos(150), 10, rndPos(150), 590, rndColor()); // left
        drawLine(rndPos(450), 10, rndPos(450), 590, rndColor()); // right
      } else { // least likely choice
        drawLine(10, rndPos(150), 590, rndPos(150), rndColor()); // top
        drawLine(rndPos(150), 10, rndPos(150), 590, rndColor()); // left
        drawLine(10, rndPos(300), 590, rndPos(300), rndColor()); // center horz
        drawLine(rndPos(300), 10, rndPos(300), 590, rndColor()); // center vert
        drawLine(10, rndPos(450), 590, rndPos(450), rndColor()); // bottom
        drawLine(rndPos(450), 10, rndPos(450), 590, rndColor()); // right
      }
    } 
    function drawLine(x1, y1, x2, y2, color) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 50;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    function rndColor() {
      let rR = Math.floor(Math.random() * 240);
      let rG = Math.floor(Math.random() * 240);
      let rB = Math.floor(Math.random() * 240);
      let color = `rgba(${rR},${rG},${rB},${1.0})`;
      return color;
    }
    function rndPos(position) { // -50 to 50
      let rNum = Math.floor(Math.random() * 101 ) -50;
      let offset = position + rNum;
      return offset;
    }
    drawArt();
  }
  render() {
    return (<div id='cancentr'>
      <div>
        <canvas ref = {this.canvasRef}
        width = {600} height = {600} />
      </div>
      <div>
        <button onClick={()=>{this.updateCanvas()}}>New Painting</button>
      </div>
    </div>);
  }
}

export default Painting3;

