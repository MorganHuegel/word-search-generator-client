import React from 'react';
import { fetchOnePuzzle } from '../actions/current-puzzles';

export default function PuzzleListItem(props){
  const wordsInList = props.puzzle.words.map(word => <li key={word}>{word}</li>)

  function handleClick(event){
    event.preventDefault();
    let domElement = event.target;
    while(!domElement.matches('.puzzle-list-item')){
      domElement = domElement.parentElement;
    }
    const puzzleId = domElement.getAttribute('data-id');
    props.dispatch(fetchOnePuzzle(puzzleId));
  }

  return (
    <li className='puzzle-list-item'
      data-id={props.puzzle.id}
      onClick={e => handleClick(e)}>
      <a href='/'>
        <h3>{props.puzzle.title}</h3>
        <ul>
          {wordsInList}
        </ul>
      </a>
    </li> 
  )
}

