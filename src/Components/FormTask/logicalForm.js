import React, { useState } from 'react';
import { FormTask } from './form';
import axios from 'axios'

const initialTask = {
    titleTask: "",
    username: "",
    descriptionTask: "",
    isComplete: 0,
    create_At: "",
}

export const LogicalForm = ({ Task }) => {
    const [task, setTask] = useState(initialTask)

    const fetchPost = () => {
        const Age = new Date()
        const date = Age.toLocaleDateString()
        const times = Age.toLocaleTimeString()
        const TimeStamp = new Date(date + ' ' + times)
        const taskCurrent = {
            ...task,
            create_At: TimeStamp
        }

        console.log(taskCurrent.create_At);

        axios.post('http://localhost:4000/api/tasks', taskCurrent)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }

    const fetchPut = (id) => {
        const Age = new Date()
        const date = Age.toLocaleDateString()
        const times = Age.toLocaleTimeString()
        const TimeStamp = new Date(date + ' ' + times)
        const taskUpdate = {
            ...task,
            create_At: TimeStamp,
        }

        axios.put(`http://localhost:4000/api/tasks/${id}`, taskUpdate)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }

    const handleChangeText = (e) => {
        const { name, value } = e.target
        setTask({ ...task, [name]: value })
    }

    const handleCheckBox = (e) => {
        const { name, checked } = e.target
        const ifs = checked ? 1 : 0

        setTask({ ...task, [name]: ifs })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (Task === undefined) {
            fetchPost()
        } else {
            fetchPut(Task.id)
        }
    }

    return (
        <>
            <FormTask
                Task={Task !== undefined && Task}
                handleChangeText={handleChangeText}
                handleCheckBox={handleCheckBox}
                handleSubmit={handleSubmit} />
        </>
    )
}