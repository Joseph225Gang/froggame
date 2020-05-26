function MakeFrog(){
    let color = 'green';
    let x = 250;
    let y = 270;

    this.getColor = () => color;

    this.getX = () => x;

    this.getY = () => y;

    this.moveXLeft = () =>{
        if( x > 30)
        x -= 10;
    }

    this.moveXRight = () =>{
        if(x < 510)
            x += 10;
    }

    this.moveYUp = () => {
        if(y > 30)
            y -= 10;
        if(this.getY() === 30)
            alert('win');
    }
    this.moveYDown = () => {
        if(y < 270)
            y += 10;
    }
}

export class myObstacle{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    moveLeft = () => this.x > 0 ? --this.x : this.x;

    getColor = () => this.x > 0 ? 'blue' : 'white';
}

export let mainCharacter = new MakeFrog();

export default {mainCharacter, myObstacle};