import { combineReducers } from 'redux';
import blogReducer from './blog/reducer';

const reducers = combineReducers({
	blog: blogReducer,
});

export type rootState = ReturnType<typeof reducers>;

export default reducers;
