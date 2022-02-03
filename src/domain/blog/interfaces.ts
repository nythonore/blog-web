export interface BlogInterface {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export interface StateInterface {
	data: BlogInterface[];
	loading: boolean;
	error: string | null;
}
