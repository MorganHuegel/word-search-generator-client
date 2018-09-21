import React from 'react';
import '../stylesheets/add-puzzle.css';
import { toggleAddState, createNewPuzzle } from '../actions/add-state';
import { fetchOnePuzzle } from '../actions/current-puzzles';
import Spinner from 'react-spinkit';

export default class AddPuzzle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numOfWords: 1,
      errorMessage: '',
      generatingPuzzle: false
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    if (this.state.generatingPuzzle) {
      let p = document.getElementsByClassName('delay-entry')[0];
      setTimeout(() => p.className -= 'delay-entry', 600);
    }
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
      this.setState({generatingPuzzle: true}, () => {
        return this.props.dispatch(createNewPuzzle({
            title: newTitle,
            words: wordArray,
            length: newLength
        }))
        .then(id => this.props.dispatch(fetchOnePuzzle(id)))
        .catch(err => this.setState({errorMessage: err.message, generatingPuzzle: false}))        
      })
    }
  }
  
  render(){
    if(this.state.generatingPuzzle){
      return (
        <div className='loading-spinner'>
          <Spinner name="ball-grid-beat" color="goldenrod" fadeIn="half"/>
          <p className='delay-entry'>Generating Puzzle...</p>
        </div>
      )
    }

    let wordInputs = [];
    for(let i = 0; i < this.state.numOfWords; i++){
      wordInputs.push(
        <div key={`input-word-${i}`} className='word-container'>
          <label htmlFor={`input-word-${i}`}>Word {i + 1}: </label>
          <input name={`input-word-${i}`} id={`input-word-${i}`} className='word-input'/>
        </div>
      );
    }

    return (
      <form name='add-puzzle' onSubmit={e => this.onSubmit(e)} className='add-puzzle'>
        <p className='error-message'>{this.state.errorMessage}</p>
        <label htmlFor='title-input'>Word Search Title: </label>
        <input type='text' name='title' id='title-input' className='title-input'/>

        <div>
          <label htmlFor='size-input'>Size: </label>
          <input type='number' name='size' id='size-input' className='size-input'/>
        </div>

        {wordInputs}
        <div>
          <button type='button' 
            onClick={e => {
              if(this.state.numOfWords <= 7){
                this.setState({numOfWords: this.state.numOfWords + 1, errorMessage: ''});
              } else {
                this.setState({errorMessage: 'Cannot have more than 8 words in a puzzle'})
              }
            }} className='add-word'>Add Word</button>
          <button type='button'
            onClick={e => {
              if(this.state.numOfWords > 1){
                this.setState({numOfWords: this.state.numOfWords - 1, errorMessage: ''})
              } else {
                this.setState({errorMessage: 'Must have at least 1 word'})
              }
            }} className='remove-word'>Remove Word</button>
        </div>

        <div>
          <button type='submit' className='add-form-button submit'>Create New Puzzle</button>        
          <button type='reset' className='add-form-button reset'>Clear Form</button>
          <button type='button' onClick={() => this.props.dispatch(toggleAddState(false))} className='add-form-button return'>Return to Puzzle List</button>
        </div>

      </form>
    )    
  }

};