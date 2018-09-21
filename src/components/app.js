import React from 'react';
import '../stylesheets/app.css';
import { connect } from 'react-redux'

import ViewPuzzle from './view-puzzle';
import AddPuzzle from './add-puzzle';
import PuzzleList from './puzzle-list';
import Header from './header'

import {toggleAddState} from '../actions/add-state';

export function App(props){
  let main;

  if(props.currentPuzzle){
    main = <ViewPuzzle currentPuzzle={props.currentPuzzle} dispatch={props.dispatch}/>
  } else if (props.addPuzzle){
    main = <AddPuzzle dispatch={props.dispatch}/>
  } else {
    main = (
      <div>
        <button type='button' onClick={ () => props.dispatch(toggleAddState(true))} className='create-new'>Create New Word Search</button>
        <PuzzleList puzzleList={props.puzzleList} dispatch={props.dispatch}/>
      </div>
    )
  }
  return (
    <div>
      <Header />
      <main>
        <div className='main-container'>
          {main}
        </div>
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