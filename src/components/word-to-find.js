import React from 'react';

export default class WordToFind extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      found: false
    }
  }

  toggleFound = () => {
    this.setState({found: !this.state.found})
  }

  render(){
    const found = this.state.found ? 'found' : '';
    return (
      <li>
        <span className={'word-to-find ' + found} onClick={() => this.toggleFound()}>
          {this.props.word}
        </span>
      </li>
    )
  }
}