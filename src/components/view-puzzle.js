import React from 'react';
import PuzzleRow from './view-puzzle-row';
import { setCurrentPuzzle } from '../actions/current-puzzles';

export default function(props){
  const rows = props.currentPuzzle.puzzle.map( (row, index) => {
    return <PuzzleRow values={row} key={index} rowNum={index}/>
  })
  const wordList = props.currentPuzzle.words.map(word => <li key={word}>{word}</li>)

  return (
    <div>
      <h2>{props.currentPuzzle.title}</h2>
      {rows}
      <ul>Words to Find:
        {wordList}
      </ul>
      <button type='button' onClick={() => props.dispatch(setCurrentPuzzle(null))}>Back to List</button>
    </div>
    
  );
}