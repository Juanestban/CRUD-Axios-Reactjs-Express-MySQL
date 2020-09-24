import React from 'react';

import './form.css'

export const FormTask = ({ handleChangeText, handleSubmit, handleCheckBox, Task }) => {
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="TaskName">TaskName</label>
                    <input type="text" name="titleTask" onChange={handleChangeText} className="form-control" id="TaskName" placeholder={Task.titleTask || ''} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" onChange={handleChangeText} name="username" className="form-control" placeholder={Task.username || ''} id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="textarea">descriptionTask</label>
                    <textarea type="text" onChange={handleChangeText} name="descriptionTask" placeholder={Task.descriptionTask || ''} className="form-control" id="textarea" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" onChange={handleCheckBox} id="isComplete" name="isComplete" />
                    <label className="form-check-label" htmlFor="isComplete">Task Complete</label>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}