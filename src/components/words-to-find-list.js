import React from 'react';
import WordToFind from './word-to-find';

export default function WordsToFindList(props){
  const wordList = props.wordList.map(word => <WordToFind word={word} key={word} dispatch={props.dispatch} currentPuzzle={props.currentPuzzle}/>)
  return (
    <ul className='words'>Words to Find:
      {wordList}
    </ul>
  )
}