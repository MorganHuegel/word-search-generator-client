import React from 'react';

export default function(props){
  return (
    <span className='puzzle-cell' style={{
        width:`${100/props.length}%`,
        maxWidth: 30
      }}>
      {props.letter}
    </span>
  )
}