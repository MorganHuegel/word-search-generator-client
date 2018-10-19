import React from 'react';
import { getPuzzleHint } from '../actions/current-puzzles';

export default class WordToFind extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      found: false,
      hint: []
    }
  }

  toggleFound = () => {
    this.setState({found: !this.state.found})
  }

  toggleHint = () => {
    if (this.state.hint.length === 0) {
      const word = this.props.word;
      this.props.dispatch(getPuzzleHint(word, this.props.currentPuzzle))
      .then(hint => this.setState({hint}))
      .catch(err => console.error(err));
    } else {
      this.setState({hint: []})
    }
  }

  render(){
    const found = this.state.found ? 'found' : '';
    return (
      <li>
        <span className={'word-to-find ' + found} onClick={() => this.toggleFound()}>
          {this.props.word}
        </span>
        <button type='button' className='hint-button' onClick={() => this.toggleHint()}>Hint</button>
      </li>
    )
  }
}