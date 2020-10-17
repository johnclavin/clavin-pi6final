import React from 'react';
import './Painting2.css';

class Painting2 extends React.Component {
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
    ctx.fillStyle = '#C7C7C7';
    ctx.fillRect(0, 0, 600, 600);

    class Dot {
      constructor(x, y, c) {
        this.x = x;
        this.y = y;
        this.color = c;
        this.randinc_x = 0;
        this.randinc_y = 0;
        this.size = 0;
        this.move();
      }
      setColor(incrementedSize) {
        this.size = incrementedSize;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
      move() {
        if(Math.random() * 1000 < 35) {
          this.randinc_x = (Math.random() * 4) - 2.0;
        }
        if(Math.random() * 1000 < 35) {
          this.randinc_y = (Math.random() * 4) - 2.0;
        }
        this.x += this.randinc_x;
        this.y += this.randinc_y;
      }
    }

    let dotArrayBlk = [];
    let dotArrayOrg = [];
    let dotArrayWht = [];
    let numOfLines = 2;
    let cBlk = '#000000';
    let cOrg = '#FF8000';
    let cWht = '#FFFFFF';

    for (let i = 0; i < numOfLines; i++) {
      let xBlk = 300;
      let yBlk = 300;
      let dBlk = new Dot(xBlk, yBlk, cBlk);
      dotArrayBlk.push(dBlk);

      let xOrg = 300;
      let yOrg = 300;
      let dOrg = new Dot(xOrg, yOrg, cOrg);
      dotArrayOrg.push(dOrg);

      let xWht = 300;
      let yWht = 300;
      let dWht = new Dot(xWht, yWht, cWht);
      dotArrayWht.push(dWht);
    }

    for (let h = 0; h < 540; h++) {
      dotArrayBlk[0].move();
      dotArrayBlk[0].setColor(6);
    }
    for (let h = 0; h < 540; h++) {
      dotArrayOrg[0].move();
      dotArrayOrg[0].setColor(6);
    }
    for (let h = 0; h < 540; h++) {
      dotArrayWht[0].move();
      dotArrayWht[0].setColor(6);
    }
    for (let h = 0; h < 540; h++) {
      dotArrayBlk[1].move();
      dotArrayBlk[1].setColor(6);
    }
    for (let h = 0; h < 540; h++) {
      dotArrayOrg[1].move();
      dotArrayOrg[1].setColor(6);
    }
    for (let h = 0; h < 540; h++) {
      dotArrayWht[1].move();
      dotArrayWht[1].setColor(6);
    }
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

export default Painting2;
