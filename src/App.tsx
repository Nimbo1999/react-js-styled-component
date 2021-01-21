import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { publicRoutes } from './pages/routes';

import Header from './components/header';

const defaultAction = (payload: any) => ({
	type: 'DEFAULT_ACTION_01',
	payload
});

function App() {
	const dispatch = useDispatch();

	return (
		<BrowserRouter>
			<Header />

			<Switch>
				<Suspense fallback={<>Loading...</>}>
					{publicRoutes.map(route => <Route {...route} />)}
				</Suspense>
			</Switch>
			
		</BrowserRouter>
	);
}

export default App;
