
import React from 'react';

const Data = (props) => {
  return (
    <div onClick={ ()=>props.onValuesClick(props.data)} >
      <h1> {props.data} </h1>
    </div>
  );
}

export default Data;
