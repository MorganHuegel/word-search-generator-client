import React from 'react';
import PuzzleCell from './view-puzzle-cell';

export default function PuzzleRow(props){
  const cells = props.values.map( (letter, index) => <PuzzleCell 
                                                        position={{rowNum: props.rowNum, colNum: index}} 
                                                        letter={letter} key={props.rowNum * props.values.length + index} 
                                                        length={props.values.length}/>)
  return (
    <div className='puzzle-row'>
      {cells}
    </div>
  )
}