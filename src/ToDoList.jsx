import { useState, useEffect } from "react";
import ToDoListHeader from "./ToDoListHeader.jsx";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [isActive, setIsActive] = useState(false)

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function showAddTaskMenu() {
        if (isActive === false) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    function handOverTask(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask != "" && tasks.length < 8 && newTask.length < 20) {
            setTasks(t => [...t, newTask])
            setNewTask("")
        } else {
            if (newTask.length > 20) {
                alert("Task is too long!")
            } else if (newTask == "") {
                alert("Empty task.")
            } else {
                alert("Too much tasks!")
            }
        }
    }

    return (
        <div className="ToDoList-container">
            <ToDoListHeader></ToDoListHeader>

            <ol className="tasks-container" style={{ filter: isActive ? "blur(3px)" : "none" }}>
                <img className="zero-tasks" src="https://cdn-icons-png.flaticon.com/512/5058/5058046.png" style={{ display: tasks.length > 0 ? "none" : "block" }} alt="" />
                {tasks.map((task, index) => <li key={index}>
                    <div className="task-block"><span className="task-text">{task}</span>
                        <button className="task-button" onClick={() => deleteTask(index)}></button>
                    </div>
                </li>)}
            </ol>
            <div className="new-task-menu" style={{ display: isActive ? "flex" : "none" }}>
                <input type="text" value={newTask} onChange={handOverTask} className="task-name" placeholder="Enter task" />
                <button onClick={addTask}>Add task</button>
            </div>
            <button className="createTask" onClick={showAddTaskMenu}>
                <img src={isActive ? "https://cdn-icons-png.flaticon.com/512/8275/8275675.png" : "https://cdn-icons-png.flaticon.com/512/2997/2997933.png"} alt="" />
            </button>
        </div >
    )
}

export default ToDoList