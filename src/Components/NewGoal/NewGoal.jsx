import React from "react";

const NewGoal = props => {
    function addGoalHandler(e){
        e.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text: 'My new Goal',
        }
        props.addGoalOn (newGoal);
        console.log('you clickem me');
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input  type="text" />
            <button type="submit">Add Goal</button>
        </form>
    );
}

export default NewGoal;