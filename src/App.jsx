import './App.css';
import FccLogo from './components/logo/FccLogo';
import Tasklist from './components/taskList/Tasklist';

function App() {
	return (
		<div className='App-task'>
			<div className='freecodecamp-logo'>
				<FccLogo />
			</div>
			<div className='task-list-principal'>
				<h1>My Tasks</h1>
				<Tasklist />
			</div>
		</div>
	);
}

export default App;
