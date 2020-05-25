import React from 'react';
import {mainCharacter} from './MainCharacter';

class GameArea extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
      
    }

    component = this;

    buttonDiv = {
        textAlign:'center',
        width: '600px'
      };

    moveup() {
        mainCharacter.y -= 10;
    }

    moveleft() {
        mainCharacter.x -= 10;
    }

    moveright() {
        mainCharacter.x += 10;
    }

    movedown() {
        mainCharacter.y += 10;
    }

    componentDidUpdate() {
      // Draws a square in the middle of the canvas rotated
      // around the centre by this.props.angle
      const canvas = this.canvasRef.current;
      const ctx = canvas.getContext('2d');
      const width = canvas.width;
      const height = canvas.height;
      const x_axis = 30;
      const y_axis = 30;
      ctx.save();
      ctx.beginPath();
      //ctx.clearRect(0, 0, width, height);;
      ctx.fillStyle = '#bbffff';;
      ctx.fillRect(x_axis, y_axis, width, height);
      //document.body.insertBefore(canvas, document.body.childNodes[0]);
      this.createMainFrog(ctx, mainCharacter.width, mainCharacter.height, "green", mainCharacter.x, mainCharacter.y);
      ctx.restore();
    }
    
    createMainFrog(ctx, width, height, color, x, y) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    render() {
      return <div>
                <canvas width="560" height="320"  ref={this.canvasRef} />
                   
                <div style={this.buttonDiv}>
                    <button  onClick={this.moveup}>Up</button>
                    <br/>
                    <br/>
                    <button onClick={this.moveleft}>Left</button>
                    <button onClick={this.moveright}>Right</button>  
                    <br/>
                    <br/>
                    <button onClick={this.movedown}>Down</button>
                </div>
             </div>;
    }
  }

  export default GameArea;