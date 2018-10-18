import React from 'react';

export default class Cell extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
  }

  toggleSelected = () => {
    this.setState({selected: !this.state.selected})
  }
  
  render(){
    const selected = this.state.selected ? 'selected' : null;
    return (
      <span className={`puzzle-cell ${selected}`} style={{
          width:`${100/this.props.length}%`,
          maxWidth: 30
        }}
        data-position={this.props.position}
        onClick={(e) => this.toggleSelected()}>
        {this.props.letter}
      </span>
    )
  }
}