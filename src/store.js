import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import puzzlesReducer from './reducers/puzzles'

const store = createStore(
  puzzlesReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store;