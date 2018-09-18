import React from 'react';
import { connect } from 'react-redux'
import ViewPuzzle from './view-puzzle';
import AddPuzzle from './add-puzzle';
import PuzzleList from './puzzle-list';

export function App(props){
  let main;

  if(props.currentPuzzle){
    main = <ViewPuzzle currentPuzzle={props.currentPuzzle}/>
  } else if (props.addPuzzle){
    main = <AddPuzzle />
  } else {
    main = <PuzzleList puzzleList={props.puzzleList}/>
  }
  return (
    <div>
      <header>
        <h1>Heading Goes Here</h1>
      </header>
      <main>
        {main}
      </main>
    </div>
  )
}

function mapStateToProps(state){
  return {
    currentPuzzle: state.currentPuzzle,
    addPuzzle: state.addPuzzle,
    puzzleList: state.puzzleList
  }
}

export default connect(mapStateToProps)(App)