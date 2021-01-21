import { useDispatch } from 'react-redux';

import Header from './components/header';

const defaultAction = (payload: any) => ({
	type: 'DEFAULT_ACTION_01',
	payload
});

function App() {
	const dispatch = useDispatch();

	return (
		<>
			<Header />
			
		</>
	);
}

export default App;
