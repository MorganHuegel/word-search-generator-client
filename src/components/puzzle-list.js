import React from 'react';
import '../stylesheets/puzzle-list.css';
import Spinner from 'react-spinkit';
import PuzzleListItem from './puzzle-list-item';
import { fetchAllPuzzles } from '../actions/current-puzzles';

export default class PuzzleList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    return this.props.dispatch(fetchAllPuzzles())
      .then(() => this.setState({loading: false}))
  }


  render(){
    if(this.state.loading){
      return (
        <div className='loading-spinner'>
          <Spinner name="ball-grid-beat" color="goldenrod" fadeIn="none"/>
          <p>Fetching Puzzles...</p>
        </div>
      )    
    }


    const lists = this.props.puzzleList.map(puzzle => {
      return <PuzzleListItem puzzle={puzzle} key={puzzle.id} dispatch={this.props.dispatch}/>
    });

    return (
      <div className='puzzle-list'>
        <h2>Available Word Searches</h2>
        <ul>
          {lists}
        </ul>      
      </div>
    )
  }

}