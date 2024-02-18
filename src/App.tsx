import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MenuBar from './components/MenuBar';
import NodePage from './pages/NodePage';
import NotFoundPage from './pages/NotFoundPage';
import PythonApiPage from './pages/PythonApiPage';
import PythonStationPage from './pages/PythonStationPage';
import HomePage from './pages/HomePage';
import CreateAccountPage from './pages/CreateAccountPage';
import SigninPage from './pages/SigninPage';
import StatePage from './pages/StatePage';
import PythonCitiesPage from './pages/PythonCitiesPage';
import NodeStationPage from './pages/NodeStationPage';
import SplitScreenParentPage from './pages/SplitScreenParentPage';
import ListParentPage from './pages/ListParentPage';
import ModalParentPage from './pages/ModalParentPage';
import ContainerComponentParent from './pages/ContainerComponentParent';
import OnboardingFlowParent from './pages/OnBoardingFlowParent';
import PythonUsersPage from './pages/PythonUsersPage';
import PythonProductsPage from './pages/PythonProductsPage';

let App = () => {
	return (
		<BrowserRouter>
			<div className='App'>
				<MenuBar />
				<div id='body'>
					<Routes>
						<Route
							path='/'
							element={<HomePage />}
						/>
						<Route
							path='/state'
							element={<StatePage />}
						/>
						<Route
							path='/grid'
							element={<SplitScreenParentPage />}
						/>
						<Route
							path='/list'
							element={<ListParentPage />}
						/>
						<Route
							path='/component'
							element={<ContainerComponentParent />}
						/>
						<Route
							path='/modal'
							element={<ModalParentPage />}
						/>
						<Route
							path='/api'
							element={<PythonApiPage />}
						/>
						<Route
							path='/cities'
							element={<PythonCitiesPage />}
						/>
						<Route
							path='/users'
							element={<PythonUsersPage />}
						/>
						<Route
							path='/products'
							element={<PythonProductsPage />}
						/>
						<Route
							path='/station'
							element={<PythonStationPage />}
						/>
						<Route
							path='/node'
							element={<NodePage />}
						/>
						<Route
							path='/node_station'
							element={<NodeStationPage />}
						/>
						<Route
							path='/onboarding'
							element={<OnboardingFlowParent />}
						/>
						<Route
							path='/create'
							element={<CreateAccountPage />}
						/>
						<Route
							path='/signin'
							element={<SigninPage />}
						/>
						<Route
							path='*'
							element={<NotFoundPage />}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
