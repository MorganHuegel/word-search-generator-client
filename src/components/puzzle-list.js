import React from 'react';
import PuzzleListItem from './puzzle-list-item';

export default function(props){
  const lists = props.puzzleList.map(puzzle => {
    return <PuzzleListItem puzzle={puzzle} key={puzzle.id} dispatch={props.dispatch}/>
  });

  return (
    <div>
      <h2>Available Word Searches</h2>
      <ul>
        {lists}
      </ul>      
    </div>

  )
}