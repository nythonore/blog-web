import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { listBlog } from '../../domain/blog/actions';
import Blog from '../components/Blog';
import Search from '../components/Search';
import useTypedSelector from '../../core/hooks/useTypedSelector';

const BlogListView = () => {
	const dispatch = useDispatch();

	const { loading, data } = useTypedSelector(state => state.blog);

	useEffect(() => {
		dispatch(listBlog());
	}, [dispatch]);

	return (
		<div className='blog py-5'>
			<Container fluid>
				<Row>
					<Col md={12}>
						<Row className='align-items-center'>
							<Col>
								<h2 className='font-sz-24 font-wg-600 text-white title'>
									Featured Blog
								</h2>
							</Col>

							<Col md={6} lg={3}>
								<Search />
							</Col>
						</Row>
					</Col>
				</Row>

				<Row className='mt-5'>
					{loading
						? null
						: data.map((data, key) => (
								<Col md={6} className='mb-4'>
									<Blog key={key} data={data} />
								</Col>
						  ))}
				</Row>
			</Container>
		</div>
	);
};

export default BlogListView;
