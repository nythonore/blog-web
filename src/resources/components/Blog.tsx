import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { trimText } from '../../core/helpers/utils';
import { BlogInterface } from '../../domain/blog/interfaces';

type Props = {
	data: BlogInterface;
};

const Blog = ({ data }: Props) => {
	return (
		<div className='blog-card cursor shadow'>
			<Row>
				<Col lg={5} className='image-card'>
					<div
						style={{
							background: `url(https://picsum.photos/300?random=${data.id}) no-repeat`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							width: '100%',
							height: '100%',
						}}
						className='image'
					></div>
				</Col>

				<Col lg={7} className='content-card'>
					<div className='border px-4 py-4 bg-white'>
						<h2 className='font-sz-21 font-wg-600'>{data.title}</h2>

						<p className='font-sz-14 font-wg-400 text-muted mt-3'>
							{trimText(data.body, 100)}
						</p>

						<div className='user-card d-flex align-items-center mt-4'>
							<Image
								alt='Honore Niyitegeka'
								src='https://sikharkumarbhuyan.github.io/assets/img/profile.png'
								className='img-fluid'
							/>

							<div className='px-3 font-sz-14 font-wg-300'>
								<p>John Doe</p>
								<p className='text-muted'>Feb 3, 2022 . 4 min read</p>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Blog;
