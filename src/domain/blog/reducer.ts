import { StateInterface } from './interfaces';
import { enumType, actionType } from './types';

const initialState = {
	data: [],
	loading: false,
	error: null,
};

const reducer = (
	state: StateInterface = initialState,
	action: actionType
): StateInterface => {
	switch (action.type) {
		case enumType.REQUEST_LIST_BLOG_LOADING:
			return { ...state, loading: true };

		case enumType.REQUEST_LIST_BLOG_SUCCESS:
			return { ...state, loading: false, data: action.payload, error: null };

		case enumType.REQUEST_LIST_BLOG_ERROR:
			return { loading: false, data: [], error: action.payload };
		default:
			return state;
	}
};

export default reducer;
