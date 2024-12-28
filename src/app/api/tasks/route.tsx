import { useState } from "react";

const [tasks, setTasks] = useState<Task[]>([]);

type UrgencyLevel = "Urgente" | "Médio" | "Tranquilo";

interface Task {
    id: number;       
    title: string;      
    complete: boolean;   
    urgency: string;    
    date: Date;         
}

export const addTask = (newTaskTitle: string, urgency: UrgencyLevel) => {
    const newTask: Task = {
        id: Date.now(),
        title: newTaskTitle,
        complete: false,
        urgency: urgency,
        date: new Date()
    };
    setTasks([...tasks, newTask]);
};

export const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
};

export const renderTasks = () => {
    return tasks.map((task) => (
        <div key={task.id}>
            <h3>{task.title}</h3>
            <p>Urgência: {task.urgency}</p>
            <p>Data: {task.date.toLocaleDateString()}</p>
            <p>Concluída: {task.complete ? "Sim" : "Não"}</p>
            <button onClick={() => deleteTask(task.id)}>Deletar</button>
        </div>
    ));
};