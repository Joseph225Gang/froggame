import React from "react";

function Button(props) {
      return (
        <React.Fragment>
        <button>
        {props.movement}
      </button>
      </React.Fragment>
    );
  }

export default Button;