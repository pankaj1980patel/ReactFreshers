// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import GoalList from './Components/GoalList';
import NewGoal from './Components/NewGoal/NewGoal'
function App() {

  
  const [courseGoals,setCourseGoals]=useState([
    {id:'cg1', text: 'Finish the Course'},
    {id:'cg2', text: 'Learn about the course main topics'},
    {id:'cg3', text: 'Help other studentds in course Q&A'},
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
    // courseGoals.push(newGoal);
    // console.log(courseGoals);
  };
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
      <NewGoal addGoalOn={addNewGoalHandler}/>
      <GoalList  goals={courseGoals} />  
    </div>
  );
}

export default App;
