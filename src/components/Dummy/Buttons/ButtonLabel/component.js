import React from 'react';
import './component.sass';

const ButtonLabel = (props) => {
  let style = {
    backgroundColor: `${props.backgroundColor}`,
    color: `${props.color}`,
    border: `${props.border}`
  }

  return (
    <div className="btnLabel" style={style} onClick={props.click}>
      {props.title}
    </div>
);
}

export default ButtonLabel
