import { SERVER_URL } from "../config";
import { fetchOnePuzzle } from "./current-puzzles";


export const TOGGLE_ADD_STATE = 'TOGGLE_ADD_STATE';
export const toggleAddState = bool => ({
  type: TOGGLE_ADD_STATE,
  bool
});


export const createNewPuzzle = puzzleData => dispatch => {
    return fetch(`${SERVER_URL}/puzzles/new/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(puzzleData)
    })
    .then(res => res.json())
    .then(newId => {
        dispatch(fetchOnePuzzle(newId.id))
    });
}