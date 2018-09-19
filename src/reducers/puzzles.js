import { SET_CURRENT_PUZZLE } from '../actions/current-puzzles';
import { TOGGLE_ADD_STATE } from '../actions/add-state';



const initialState = {
  currentPuzzle: null,
  puzzleList: [
    {
      id: '000000000000000000000000', 
      title: 'Animals', 
      words: ['dog', 'cat', 'horse', 'snake', 'bunny']
    },
    {
      id: '000000000000000000000001', 
      title: 'Adjectives', 
      words: ['large', 'pointy', 'small', 'fuzzy', 'yellow']
    },
    {
      id: '000000000000000000000002', 
      title: 'Occupations', 
      words: ['doctor', 'plumber', 'grocer', 'soldier', 'author']
    }
  ],
  addPuzzle: false
};

export default function(state=initialState, action){
  if(action.type === SET_CURRENT_PUZZLE){
    return Object.assign({}, state, {
      currentPuzzle: action.puzzleData
    })
  } else if (action.type === TOGGLE_ADD_STATE){
    return Object.assign({}, state, {
      addPuzzle: action.bool
    })
  }
  return state;
}


