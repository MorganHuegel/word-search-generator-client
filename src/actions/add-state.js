import { SERVER_URL } from "../config";


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
    .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject({status: res.status, message: res.statusText})
        }
    })
    .then(newId => {
        return Promise.resolve(newId.id);
    })
    .catch(err => {
        return Promise.reject(err);
    });
}