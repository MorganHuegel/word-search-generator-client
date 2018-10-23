import React from 'react';
import '../stylesheets/view-puzzle.css';
import PuzzleRow from './view-puzzle-row';
import WordsToFindList from './words-to-find-list';
import { setCurrentPuzzle, deletePuzzle, editPuzzleTitle, getPuzzleHint } from '../actions/current-puzzles';

export default class ViewPuzzle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      editTitle: false
    }
  }


  showAnswers = () => {
    const answers = [];
    const asyncActions = [];
    this.props.currentPuzzle.words.forEach(word => {
      asyncActions.push(
        this.props.dispatch(getPuzzleHint(word, this.props.currentPuzzle.puzzle))
          .then(hintArray => answers.push(hintArray))
          .catch(err => console.error(err))
      );
    })
    return Promise.all(asyncActions)
      .then(() => {
        answers.forEach(positionArray => {
          positionArray.forEach(position => {
            const cell = document.querySelectorAll(`[data-rownum='${position.rowNum}'][data-colnum='${position.colNum}']`)[0];
            if (cell.classList.contains('solve')) cell.classList.remove('solve');
            else cell.classList.add('solve');
          });
        });
        
      })
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
    return this.props.dispatch(editPuzzleTitle({id: id, title: newTitle}))
    .then( () => this.toggleEditState(false));
  }


  render(){
    let changeTitle = null;
    if(this.state.editTitle === true){
      changeTitle = (
        <div className='change-title'>
          <label htmlFor='edit-title'>Enter New Title: </label>
          <input name='edit-title' id='edit-title'/>
          <div className='edit-title-buttons'>
            <button className='edit-title-change' type='button' onClick={() => this.changeTitle()}>Change Title</button>
            <button className='edit-title-nevermind' type='button' onClick={() => this.toggleEditState(false)}>Nevermind</button>
          </div>
        </div>
      )
    }

    const rows = this.props.currentPuzzle.puzzle.map( (row, index) => {
      return <PuzzleRow values={row} key={index} rowNum={index} answers={this.props.answers}/>
    })

    return (
      <div className='view-puzzle' data-id={this.props.currentPuzzle.id}>
        <p className='playing-instructions'>Click on the Word-Search to highlight letters! Cross-off words in the list as you find them. Click "HINT" if you're stuck.</p>
        <h2>{this.props.currentPuzzle.title} 
          <button type='button' onClick={() => this.toggleEditState(true)}>Edit Title</button>
        </h2>
        {changeTitle}

        <div className='puzzle-container' style={{maxWidth: 30 * this.props.currentPuzzle.puzzle.length}}>
          {rows}
        </div>
        

        <WordsToFindList wordList={this.props.currentPuzzle.words} dispatch={this.props.dispatch} currentPuzzle={this.props.currentPuzzle.puzzle}/>
        <div>
          <button type='button' onClick={() => this.showAnswers()} className='solve'>Show Answers</button>
          <button type='button' onClick={() => this.props.dispatch(setCurrentPuzzle(null))} className='back'>Back to List</button>
          <button type='button' onClick={() => this.deleteCurrent()} className='delete'>Delete Word Search</button>
        </div>
      </div>
      
    );
  }

}