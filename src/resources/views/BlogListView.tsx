import { Container, Row, Col } from 'react-bootstrap';
import Blog from '../components/Blog';
import Search from '../components/Search';

const BLOG_SAMPLE = {
	userId: 1,
	id: 1,
	title:
		'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
	body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

const BlogListView = () => {
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
					{[1, 2, 3, 4, 5, 6, 7, 8].map((_, key) => (
						<Col md={6} className='mb-4'>
							<Blog key={key} data={{ ...BLOG_SAMPLE, id: key }} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default BlogListView;
