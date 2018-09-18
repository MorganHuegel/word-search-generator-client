const initialState = {
  currentPuzzle: null,
  puzzleList: [
    {id: '000000000000000000000000', 
    title: 'Test Puzzle', 
    words: ['dog', 'cat', 'horse', 'snake', 'bunny']}
  ],
  addPuzzle: false
};

export default function(state=initialState, action){
  return state;
}