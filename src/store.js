import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import puzzlesReducer from './reducers/puzzles'

const store = createStore(
  puzzlesReducer, 
  applyMiddleware(thunk)
)

export default store;