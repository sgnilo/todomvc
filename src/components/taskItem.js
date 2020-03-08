import React from 'react'
const ICON = require('../assets/done.png')

const TaskItem = (props) => {

    const {task, changeTaskStatus, index, delTaskItem} = props


    return <div className="task-item">
        <div className="check-box" onClick={() => {changeTaskStatus(task, index)}}>
            {task.status && <img src={ICON} alt="" />}
        </div>
        <div className={`${task.status ? 'task-finish ' : '' }task-discribe`}>
            {task.value}
            <span className="clear" onClick={() => {delTaskItem(task, index)}}></span>
        </div>
    </div>
}

export default TaskItem