import React from 'react';
import { toggleAddState, createNewPuzzle } from '../actions/add-state';

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
    const newLength = Number(event.target.getElementsByClassName('size-input')[0].value);

    let wordArray = [];
    for(let i = 0; i < this.state.numOfWords; i++){
      wordArray.push(event.target.getElementsByClassName('word-input')[i].value.trim().toLowerCase().replace(/[^a-z]/g, ''));
    }

    if (!newTitle) {
      this.setState({errorMessage: 'Must provide a title.'})
    } else if (wordArray.includes('')) {
      this.setState({errorMessage: 'The provided words must be valid, containing only letters A-Z.'})
    } else if (newLength < 5 || newLength > 50) {
      this.setState({errorMessage: 'Check size. The word-search must be at least 5x5 and less than 50x50'})
    } else {
      this.props.dispatch(createNewPuzzle({
          title: newTitle,
          words: wordArray,
          length: newLength
      }))
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

        <label htmlFor='size-input'>Size: </label>
        <input type='number' name='size' id='size-input' className='size-input'/>

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