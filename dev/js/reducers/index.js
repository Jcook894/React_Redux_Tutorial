//where you import all the reducer files and combine them all into on big object.

import {combineReducers} from 'redux';
import UserReducer from './reducer-user.js';

const allReducers = combineReducers({
  users: UserReducer
});
