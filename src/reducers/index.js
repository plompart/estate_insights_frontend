/**
 * Created by Patryk on 2017-04-09.
 */

import { combineReducers } from 'redux'
import inputData from './inputData'
import checkboxData from './checkboxData'

const reducer = combineReducers({
  inputData,
  checkboxData
});

export default reducer
