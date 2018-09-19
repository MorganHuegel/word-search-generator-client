import React from 'react';
import { toggleAddState } from '../actions/add-state';

export default class AddPuzzle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numOfWords: 1,
      errorMessage: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    const newTitle = event.target.getElementsByClassName('title-input')[0].value.trim();
    let wordArray = [];
    for(let i = 0; i < this.state.numOfWords; i++){
      wordArray.push(event.target.getElementsByClassName('word-input')[i].value.trim().toLowerCase().replace(/[^a-z]/g, ''));
    }
    if(!newTitle){
      this.setState({errorMessage: 'Must provide a title.'})
    } else if (wordArray.includes('')){
      this.setState({errorMessage: 'The provided words must be valid, containing only letters A-Z.'})
    } else {
      console.log({title: newTitle, words: wordArray});
      //dispatch asynch action here with {title: newTitle, words: wordArray}
    }
  }
  
  render(props){
    let wordInputs = [];
    for(let i = 0; i < this.state.numOfWords; i++){
      wordInputs.push(
        <div key={`input-word-${i}`}>
          <label htmlFor={`input-word-${i}`}>Word {i + 1}: </label>
          <input name={`input-word-${i}`} id={`input-word-${i}`} className='word-input'/>
        </div>
      );
    }

    return (
      <form name='add-puzzle' onSubmit={e => this.onSubmit(e)}>
        <p>{this.state.errorMessage}</p>
        <label htmlFor='title-input'>Word Search Title: </label>
        <input type='text' name='title' id='title-input' className='title-input'/>

        {wordInputs}
        <div>
          <button type='button' 
            onClick={e => {
              if(this.state.numOfWords <= 5){
                this.setState({numOfWords: this.state.numOfWords + 1, errorMessage: ''});
              } else {
                this.setState({errorMessage: 'Cannot have more than 6 words in a puzzle'})
              }
            }}>Add Word</button>
          <button type='button'
            onClick={e => {
              if(this.state.numOfWords > 1){
                this.setState({numOfWords: this.state.numOfWords - 1, errorMessage: ''})
              } else {
                this.setState({errorMessage: 'Must have at least 1 word'})
              }
            }}>Remove Word</button>
        </div>

        <div>
          <button type='button' onClick={() => this.props.dispatch(toggleAddState(false))}>Return to Puzzle List</button>
          <button type='reset'>Clear Form</button>
          <button type='submit'>Create New Puzzle</button>        
        </div>

      </form>
    )    
  }

};