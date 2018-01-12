import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import staticData from './staticData'

const todoApp = combineReducers({
  form: reduxFormReducer,
  staticData
})

export default todoApp
