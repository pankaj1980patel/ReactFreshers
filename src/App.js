// import logo from './logo.svg';
import './App.css';

import GoalList from './Components/GoalList';

function App() {
  return (
    <div className="course-goals">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2>Course Goals</h2>
      <GoalList />  
    </div>
  );
}

export default App;
