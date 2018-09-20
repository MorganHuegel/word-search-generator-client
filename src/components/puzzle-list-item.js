import React from 'react';
import { fetchOnePuzzle } from '../actions/current-puzzles';

export default function(props){
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

// const mockPuzzle = [
//   ['o', 'z', 'h', 'e', 'a', 'r', 't', 'r', 'd', 'c'],
//   ['c', 'i', 'n', 'c', 'x', 'l', 'u', 'd', 'o', 'u'],
//   ['x', 'l', 's', 'r', 'e', 'p', 'm', 'i', 'h', 'c'],
//   ['a', 'y', 'r', 'r', 'a', 'h', 'i', 'q', 'c', 'n'],
//   ['m', 'v', 't', 'c', 'o', 'z', 'e', 't', 'v', 'j'],
//   ['d', 'e', 'r', 'f', 'l', 'a', 'z', 's', 'p', 'w'],
//   ['s', 'g', 'o', 'd', 'p', 'l', 's', 'z', 's', 'k'],
//   ['i', 'i', 'd', 'a', 's', 'l', 'p', 'u', 'z', 't'],
//   ['m', 'l', 'j', 'q', 'u', 'n', 'e', 'y', 'd', 'z'],
//   ['f', 'm', 'm', 'o', 'n', 'b', 'z', 'd', 'x', 'y']
// ];

// const puzzleData = {
//   id: '000000000000000000000000', 
//   title: 'Animals', 
//   words: ['chimp', 'harry', 'alfred', 'heart', 'dog', 'zzzzz'],
//   puzzle: mockPuzzle
// };