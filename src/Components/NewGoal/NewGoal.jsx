import React ,{useState} from "react";

import './NewGoal.css'
const NewGoal = props => {
    const [enterdText, setEnterdText] = useState('');
    const textChangeHandler = (e)=>{
        setEnterdText(e.target.value)
    }
    function addGoalHandler(e){
        e.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text: enterdText,
        }
        props.addGoalOn (newGoal);
        setEnterdText('');
        console.log('you clickem me');
    }

    return (
        <div className="new-goal">
            <form  onSubmit={addGoalHandler}>
                <input  type="text" value={enterdText} onChange={textChangeHandler} />
                <button type="submit">Add Goal</button>
            </form>
        </div>
    );
}

export default NewGoal;