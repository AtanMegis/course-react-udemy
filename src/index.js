import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { FavoritesContextProvider } from './store/favorites-context';
import './index.css';
import App from './App';

ReactDOM.render(
	<FavoritesContextProvider>
		<Router>
			<App />
		</Router>
	</FavoritesContextProvider>,
	document.getElementById('root')
);
