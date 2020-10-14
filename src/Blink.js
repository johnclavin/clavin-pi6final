import React from 'react';
import './Blink.css';

class Blink extends React.Component {
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

    setInterval(myTimer, 1000);
    var state = true;

    function myTimer() {
      if (state) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0, 0, 80, 80);
      } else {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 80, 80);
      }
      state = !state;
    }
  }
  render() {
    return ( <div id="centr">
    <canvas ref = {this.canvasRef}
    width = {80} height = {80} />
    </div>);
  }
}

export default Blink;
