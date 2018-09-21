import React from 'react';
import '../stylesheets/view-puzzle.css';
import PuzzleRow from './view-puzzle-row';
import { setCurrentPuzzle, deletePuzzle, editPuzzleTitle } from '../actions/current-puzzles';

export default class ViewPuzzle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editTitle: false
    }
  }

  deleteCurrent = () => {
    const id = document.getElementsByClassName('view-puzzle')[0].getAttribute('data-id');
    this.props.dispatch(deletePuzzle(id));
  }


  toggleEditState = bool => {
    this.setState({editTitle: bool});
  }


  changeTitle = () => {
    const newTitle = document.getElementById('edit-title').value.trim();
    if(!newTitle){
      return;
    }
    const id = document.getElementsByClassName('view-puzzle')[0].getAttribute('data-id');
    this.props.dispatch(editPuzzleTitle({id: id, title: newTitle}))
    .then( () => this.toggleEditState(false));
  }


  render(){
    let changeTitle = null;
    if(this.state.editTitle === true){
      changeTitle = (
        <div className='change-title'>
          <label htmlFor='edit-title'>Enter New Title: </label>
          <input name='edit-title' id='edit-title'/>
          <button type='button' onClick={() => this.changeTitle()}>Change Title</button>
          <button type='button' onClick={() => this.toggleEditState(false)}>Nevermind</button>
        </div>
      )
    }

    const rows = this.props.currentPuzzle.puzzle.map( (row, index) => {
      return <PuzzleRow values={row} key={index} rowNum={index}/>
    })
    const wordList = this.props.currentPuzzle.words.map(word => <li key={word}>{word}</li>)

    return (
      <div className='view-puzzle' data-id={this.props.currentPuzzle.id}>
        <h2>{this.props.currentPuzzle.title} 
          <button type='button' onClick={() => this.toggleEditState(true)}>Edit Title</button>
        </h2>
        {changeTitle}

        <div className='puzzle-container' style={{maxWidth: 30 * this.props.currentPuzzle.puzzle.length}}>
          {rows}
        </div>
        

        <ul className='words'>Words to Find:
          {wordList}
        </ul>
        <div>
          <button type='button' onClick={() => this.props.dispatch(setCurrentPuzzle(null))} className='back'>Back to List</button>
          <button type='button' onClick={() => this.deleteCurrent()} className='delete'>Delete Word Search</button>
        </div>
      </div>
      
    );
  }

}