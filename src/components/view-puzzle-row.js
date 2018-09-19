import React from 'react';
import PuzzleCell from './view-puzzle-cell';

export default function(props){
  const cells = props.values.map( (letter, index) => <PuzzleCell letter={letter} key={props.rowNum + index}/>)
  return (
    <div className='puzzle-row'>
      {cells}
    </div>
  )
}