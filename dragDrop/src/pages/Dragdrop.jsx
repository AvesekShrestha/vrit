import { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'

export default function Dragdrop() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : { task: [], inProgress: [], completed: [] };
    });

    const addTask = (section) => {
        const newTask = prompt("Enter task name:");
        if (newTask) {
            setTasks((prevTasks) => {
                const updatedTasks = {
                    ...prevTasks,
                    [section]: [...prevTasks[section], newTask],
                };
                localStorage.setItem('tasks', JSON.stringify(updatedTasks));
                return updatedTasks;
            });
        }
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));

        const dropZones = document.querySelectorAll(".taskContainer");
        const draggables = document.querySelectorAll(".draggable");

        draggables.forEach((draggable) => {
            draggable.addEventListener("dragstart", (event) => {
                event.dataTransfer.setData("text/plain", draggable.id);
                setTimeout(() => {
                    draggable.style.visibility = "hidden";
                }, 0);
            });

            draggable.addEventListener("dragend", (event) => {
                draggable.style.visibility = "visible";
            });
        });

        dropZones.forEach((dropZone) => {
            dropZone.addEventListener("dragover", (event) => {
                event.preventDefault();
                if (!dropZone.contains(event.target))
                    dropZone.style.backgroundColor = "red";
            });

            dropZone.addEventListener("dragleave", (event) => {
                dropZone.style.backgroundColor = "white";
            });

            dropZone.addEventListener("drop", (event) => {
                const id = event.dataTransfer.getData("text/plain");
                const draggedItem = document.getElementById(id);
                dropZone.appendChild(draggedItem);
                dropZone.style.backgroundColor = "white";
            });
        });
    },[tasks]);

    return (
        <div className="container-fluid d-flex justify-content-center" style={{ height: "100vh" }}>
            <div className="container d-flex justify-content-between flex-row mt-3">
                <div className="sectionContainer w-100 me-5 d-flex flex-column">
                    <div className="sectionHeader d-flex flex-row justify-content-between align-items-center">
                        <h3>Task</h3>
                        <FaPlus cursor={"pointer"} onClick={() => addTask("task")} />
                    </div>

                    <div className="taskContainer flex-fill overflow-auto" style={{ height: "100%" }}>
                        {tasks.task.map((task, index) => (
                            <div className="draggable d-flex justify-content-center align-items-center bg-primary text-light mt-3" style={{ cursor: "pointer", height: "60px", borderRadius: "7px" }} draggable="true" id={`task-${index}`} key={index}>
                                {task}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sectionContainer w-100 me-5 d-flex flex-column">
                    <div className="sectionHeader d-flex flex-row justify-content-between align-items-center">
                        <h3>In Progress</h3>
                        <FaPlus cursor={"pointer"} onClick={() => addTask("inProgress")} />
                    </div>
                    <div className="taskContainer flex-fill overflow-auto" style={{ height: "100%" }}>
                        {tasks.inProgress.map((task, index) => (
                            <div className="draggable d-flex justify-content-center align-items-center bg-primary text-light mt-3" style={{ cursor: "pointer", height: "60px", borderRadius: "7px" }} draggable="true" id={`inProgress-${index}`} key={index}>
                                {task}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sectionContainer w-100 d-flex flex-column">
                    <div className="sectionHeader d-flex flex-row justify-content-between align-items-center">
                        <h3>Completed</h3>
                        <FaPlus cursor={"pointer"} onClick={() => addTask("completed")} />
                    </div>

                    <div className="taskContainer flex-fill overflow-auto" style={{ height: "100%" }}>
                        {tasks.completed.map((task, index) => (
                            <div className="draggable d-flex justify-content-center align-items-center bg-primary text-light mt-3" style={{ cursor: "pointer", height: "60px", borderRadius: "7px" }} draggable="true" id={`completed-${index}`} key={index}>
                                {task}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

