import React from 'react';
import  GamePiece from './GameArea';

class AreaAnimation extends React.Component {
    constructor(props) {
      super(props);
      this.state = { angle: 0 };
      this.updateAnimationState = this.updateAnimationState.bind(this);
    }
    

    componentDidMount() {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
    

    componentWillUnmount() {
      cancelAnimationFrame(this.rAF);
    }
    
    updateAnimationState() {
      this.setState(prevState => ({ angle: prevState.angle + 1 }));
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
    
    
    render() {
      return <div>
                <GamePiece/>      
             </div>
    }
  }

  export default AreaAnimation;