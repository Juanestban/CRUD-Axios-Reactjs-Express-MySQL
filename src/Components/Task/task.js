import React from 'react'


export const Task = ({ task, handleEddit, handleDelete }) => {
    const {
        id,
        titleTask,
        username,
        descriptionTask,
        isComplete,
        create_At,
    } = task

    const conditionalRendering = () => {
        return (
            isComplete
                ? 'Completada'
                : 'Faltante'
        )
    }

    const Fecha = ({date, time, children}) => {
        return (
            <>
                <span className="text-muted">
                    {children}: {date} || {time}
                </span>
            </>
        )
    }

    const timeAgo = (timeStamp, children) => {
        const Age = new Date(timeStamp)
        const date = Age.toLocaleDateString()
        const time = Age.toLocaleTimeString()
        
        return <Fecha date={date} time={time} children={children} />
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="titleTasks">
                    {`${id} ${username}`}
                </div>
                <progress value={isComplete} max={1}>{conditionalRendering()}</progress>
            </div>
            <div className="card-body">
                <h5 className="card-title">{titleTask}</h5>
                <p className="card-text">{descriptionTask}</p>
                <div className="timeago">
                    {timeAgo(create_At, 'modificado')}
                </div>
                <div className="buttons-view">
                    <button className="btn btn-info" onClick={handleEddit}>eddit</button>
                    <button className="btn btn-danger" onClick={handleDelete}>delete</button>
                </div>
            </div>
        </div>
    )
}