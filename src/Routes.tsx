import { Navigate, useRoutes } from 'react-router-dom';
import BlogListView from './resources/views/BlogListView';

const Routes = () => {
	return useRoutes([
		{ path: '/', element: <BlogListView /> },
		{ path: '*', element: <Navigate to='/' /> },
	]);
};

export default Routes;
