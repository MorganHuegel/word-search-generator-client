import React from 'react';
import { getPuzzleHint } from '../actions/current-puzzles';

export default class WordToFind extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      found: false,
      hint: null
    }
  }

  toggleFound = () => {
    this.setState({found: !this.state.found})
  }

  toggleHint = () => {
    if (!this.state.hint) {
      const word = this.props.word;
      this.props.dispatch(getPuzzleHint(word, this.props.currentPuzzle))
      .then(hint => this.setState({hint: hint[0]}))
      .catch(err => console.error(err));
    } else {
      const rowNum = String(this.state.hint.rowNum);
      const colNum = String(this.state.hint.colNum);
      const cell = document.querySelectorAll(`[data-rownum='${rowNum}'][data-colnum='${colNum}']`)[0];
      cell.classList.remove('hint');
      this.setState({hint: null})
    }
  }

  render(){
    //Change background color of cells with hints:
    if (this.state.hint) {
      const rowNum = String(this.state.hint.rowNum);
      const colNum = String(this.state.hint.colNum);
      const cell = document.querySelectorAll(`[data-rownum='${rowNum}'][data-colnum='${colNum}']`)[0];
      cell.classList.add('hint');
    }

    //Rendering Component
    const found = this.state.found ? 'found' : '';
    const buttonMessage = this.state.hint ? 'Hide Hint' : 'Get Hint'
    return (
      <li>
        <span className={'word-to-find ' + found} onClick={() => this.toggleFound()}>
          {this.props.word}
        </span>
        <button type='button' className='hint-button' onClick={() => this.toggleHint()}>{buttonMessage}</button>
      </li>
    )
  }
}