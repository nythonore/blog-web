import { Form } from 'react-bootstrap';

const Search = () => {
	return (
		<div className='quick-search'>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='Quick Search...'
					autoComplete='off'
				/>
			</Form.Group>
		</div>
	);
};

export default Search;
