import React, { useState } from 'react';
import '../styles/Goals.css'
import editicon from '../assets/edit-icon.png';
import deleteicon from '../assets/delete-icon.png';

function Goals() {
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState('');

    const addGoal = () => {
        if (newGoal.trim() !== '') {
            setGoals([...goals, { text: newGoal, completed: false }]);
            setNewGoal('');
        }
    };

    const toggleComplete = index => {
        const updatedGoals = goals.map((goal, i) =>
            i === index ? { ...goal, completed: !goal.completed } : goal
        );
        setGoals(updatedGoals);
    };

    const editGoal = index => {
        const newGoalText = prompt('Edit your goal:', goals[index].text);
        if (newGoalText !== null) {
            const updatedGoals = goals.map((goal, i) =>
                i === index ? { ...goal, text: newGoalText } : goal
            );
            setGoals(updatedGoals);
        }
    };

    const deleteGoal = index => {
        const updatedGoals = goals.filter((_, i) => i !== index);
        setGoals(updatedGoals);
    };

    return (
        <div className="goals-container">
            <h1>My Goals</h1>
            <p>Keep track of your goals and mark them as achieved!</p>
            <hr></hr>
            <div className="goal-input">
                <input
                    type="text"
                    value={newGoal}
                    onChange={e => setNewGoal(e.target.value)}
                    placeholder="Enter a new goal"
                />
                <button onClick={addGoal}>Add Goal</button>
            </div>
            <hr></hr>
            <div className="goals-list">
                {goals.map((goal, index) => (
                    <div key={index} className="goal-item">
                        <input
                            type="checkbox"
                            checked={goal.completed}
                            onChange={() => toggleComplete(index)}
                        />
                        <span className={goal.completed ? 'completed' : ''}>{goal.text}</span>
                        <img
                            src={editicon}
                            alt="Edit"
                            className="icon"
                            onClick={() => editGoal(index)}
                        />
                        <img
                            src={deleteicon}
                            alt="Delete"
                            className="icon"
                            onClick={() => deleteGoal(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default Goals;