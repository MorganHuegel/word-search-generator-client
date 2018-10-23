import { SET_CURRENT_PUZZLE, SET_PUZZLE_LIST } from '../actions/current-puzzles';
import { TOGGLE_ADD_STATE } from '../actions/add-state';



const initialState = {
  currentPuzzle: null,
  puzzleList: [],
  addPuzzle: false,
};

export default function(state=initialState, action) {
  if(action.type === SET_CURRENT_PUZZLE){
    return Object.assign({}, state, {
      currentPuzzle: action.puzzleData,
      addPuzzle: false,
      answers: []
    })

  } else if (action.type === TOGGLE_ADD_STATE) {
    return Object.assign({}, state, {
      addPuzzle: action.bool
    })

  } else if (action.type === SET_PUZZLE_LIST) {
    return Object.assign({}, state, {
        puzzleList: action.puzzleList
    })

  } else {
    return state;
  }
}


