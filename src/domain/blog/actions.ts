import axios from 'axios';
import { Dispatch } from 'redux';
import { enumType, actionType } from './types';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const listBlog = (q: string | undefined = undefined) => {
	return async (dispatch: Dispatch<actionType>) => {
		dispatch({
			type: enumType.REQUEST_LIST_BLOG_LOADING,
		});

		try {
			const { data } = await axios.get(BASE_URL, {
				params: { q },
			});

			dispatch({
				type: enumType.REQUEST_LIST_BLOG_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: enumType.REQUEST_LIST_BLOG_ERROR,
				payload: 'message',
			});
		}
	};
};
