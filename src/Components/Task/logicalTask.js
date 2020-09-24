import React, { useEffect, useState } from 'react';
import { Task } from './task';
import axios from 'axios'

import './task.css'

export const LogicalTask = ({ task }) => {
    const [tasks, setTasks] = useState([])

    const getTask = () => {
        axios.get('http://localhost:4000/api/tasks')
            .then(res => {
                setTasks(res.data)
            }).catch(err => {
                console.log(err);
            })
    }

    const handleEddit = (tasks) => {
        task(tasks)
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/api/tasks/${id}`)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getTask()
    }, [tasks])

    return (
        <div className="task">
            {tasks.length === 0
                && <img
                    className="loader"
                    style={{ alignSelf: 'center' }}
                    src="/loading.gif"
                    alt="loader" />
            }
            {tasks.length > 0 && tasks.map(task => {
                return (
                    <Task
                        key={task.id}
                        task={task}
                        handleEddit={() => handleEddit(task)}
                        handleDelete={() => handleDelete(task.id)} />
                )
            })}
        </div>
    )
}