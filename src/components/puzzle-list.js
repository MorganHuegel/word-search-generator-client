import React from 'react';
import PuzzleListItem from './puzzle-list-item';
import { fetchAllPuzzles } from '../actions/current-puzzles';

export default class PuzzleList extends React.Component {
  componentWillMount(){
    this.props.dispatch(fetchAllPuzzles())
  }

  render(){
    const lists = this.props.puzzleList.map(puzzle => {
      return <PuzzleListItem puzzle={puzzle} key={puzzle.id} dispatch={this.props.dispatch}/>
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

}