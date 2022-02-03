import { BlogInterface } from './interfaces';

export enum enumType {
	REQUEST_LIST_BLOG_LOADING = 'REQUEST_LIST_BLOG_LOADING',
	REQUEST_LIST_BLOG_SUCCESS = 'REQUEST_LIST_BLOG_SUCCESS',
	REQUEST_LIST_BLOG_ERROR = 'REQUEST_LIST_BLOG_ERROR',
}

interface actionLoading {
	type: enumType.REQUEST_LIST_BLOG_LOADING;
}

interface actionSuccess {
	type: enumType.REQUEST_LIST_BLOG_SUCCESS;
	payload: BlogInterface[];
}

interface actionError {
	type: enumType.REQUEST_LIST_BLOG_ERROR;
	payload: string;
}

export type actionType = actionLoading | actionSuccess | actionError;
