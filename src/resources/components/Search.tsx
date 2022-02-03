import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { listBlog } from '../../domain/blog/actions';

const Search = () => {
	const dispatch = useDispatch();

	return (
		<div className='quick-search'>
			<Form.Group>
				<Form.Control
					type='text'
					name='search'
					placeholder='Quick Search...'
					autoComplete='off'
					onChange={({ target: { value } }) => dispatch(listBlog(value))}
				/>
			</Form.Group>
		</div>
	);
};

export default Search;
