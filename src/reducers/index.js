import { combineReducers } from 'redux';
import filler from './defaultReducer';

const rootReducer = combineReducers({
  filler: filler
});

export default rootReducer;
