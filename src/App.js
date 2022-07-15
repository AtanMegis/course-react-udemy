// import Todo from './components/Todo';
import { Route, Switch } from 'react-router-dom';
import AllMeets from './pages/AllMeets';
import NewMeets from './pages/NewMeets';
import Favorites from './pages/Favorites';
import Layout from './components/Layout/Layout';
function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<AllMeets />
				</Route>
				<Route path="/new-meetup" exact>
					<NewMeets />
				</Route>
				<Route path="/favorites" exact>
					<Favorites />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;

// {
// 	 <h1>My Todos</h1>
// 		<Todo text="Learn React" />
// 			<Todo text="Mastering React" />
// 		<Todo text="Exploring React" />
// }
