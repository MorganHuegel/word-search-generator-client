import { SERVER_URL } from '../config';

export const SET_CURRENT_PUZZLE = 'SET_CURRENT_PUZZLE';
export const setCurrentPuzzle = puzzleData => ({
  type: SET_CURRENT_PUZZLE,
  puzzleData
})

export const fetchOnePuzzle = id => dispatch => {
    return fetch(`${SERVER_URL}/puzzles/${id}/`)
        .then(res => res.json())
        .then(singlePuzzle => dispatch(setCurrentPuzzle(singlePuzzle)));
}



export const SET_PUZZLE_LIST = 'SET_PUZZLE_LIST';
export const setPuzzleList = puzzleList => ({
  type: SET_PUZZLE_LIST,
  puzzleList
})

export const fetchAllPuzzles = () => dispatch => {
    return fetch(`${SERVER_URL}/puzzles/`)
        .then(res => res.json())
        .then(puzzleList => dispatch(setPuzzleList(puzzleList)))
}