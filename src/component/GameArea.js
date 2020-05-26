import React from 'react';
import {mainCharacter, myObstacle} from './MainCharacter';

class GameArea extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
      
    }

    obstacles = [];

    particle = {
      size:30
    };

    buttonDiv = {
        textAlign:'center',
        width: '600px'
      };

    moveup() {
        mainCharacter.moveYUp();
    }

    moveleft() {
        mainCharacter.moveXLeft();
    }

    moveright() {
        mainCharacter.moveXRight();
    }

    movedown() {
        mainCharacter.moveYDown();
    }

    componentDidMount(){
      this.createObstacle();
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
      
      if (this.obstacles.some((item) => {
        return this.crashWithObstacle(item);
      }))
        return;
      ctx.save();
      ctx.beginPath();
      //ctx.clearRect(0, 0, width, height); 
      ctx.fillStyle = '#bbffff';
      ctx.fillRect(x_axis, y_axis, width, height);
      //document.body.insertBefore(canvas, document.body.childNodes[0]);
      this.createComponent(ctx, this.particle.size,this.particle.size, "green", mainCharacter.getX(), mainCharacter.getY());
      
      this.obstacles.forEach((item) => {
          this.createComponent(ctx, this.particle.size, this.particle.size, item.x <= 0 ? 'white' : 'blue', item.x <= 0 ? item.x : item.x--, item.y);
      });
      ctx.restore();
    }
    
    createComponent(ctx, width, height, color, x, y) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    createObstacle() {
      setInterval(() => {
        this.obstacles.push(new myObstacle(510,160));
        },3000);    
    }

    crashWithObstacle(item){
        let crash = true;
        let myleft = mainCharacter.getX();
        let myright = mainCharacter.getX() +  this.particle.size;
        let mytop = mainCharacter.getY();
        let mybottom = mainCharacter.getY() + this.particle.size;
        let otherleft = item.x;
        let otherright = parseInt(item.x) + this.particle.size;
        let othertop = item.y;
        let otherbottom = parseInt(item.y) + this.particle.size;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
          crash = false;
        }
      return crash;
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