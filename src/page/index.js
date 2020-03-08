import React, {useState} from 'react';
import {Head, TaskItem, Foot} from '../components/index'

function App() {

    const [fold, setFold] = useState(false)

    const [activeTaskList, setActiveTaskList] = useState(JSON.parse(localStorage.activeTaskList || '[]'))

    const [finishedTaskList, setfinishedTaskList] = useState(JSON.parse(localStorage.finishedTaskList || '[]'))

    const [allTaskList, setAllTaskList] = useState(JSON.parse(localStorage.allTaskList || '[]'))

    const [mode, setMode] = useState('all')   //all | active | finish

    const getTask = (val) => {
        let task = {
            value: val,
            status: false
        }
        let tempList = [...activeTaskList]
        let tempAllTask = [...allTaskList]
        tempAllTask.push({...task})
        tempList.push({...task})
        setActiveTaskList(tempList)
        setAllTaskList(tempAllTask)
        localStorage.activeTaskList = JSON.stringify(tempList)
        localStorage.allTaskList = JSON.stringify(tempAllTask)
    }

    const changeMode = (m) => {
        setMode(m)
    }

    const clearFinish = () => {
        let len = finishedTaskList.length
        let tempAllTask = [...allTaskList]
        for (let i = 0; i < len; i++) {
            tempAllTask.splice(tempAllTask.findIndex(task => task.status), 1)
        }
        setfinishedTaskList([])
        setAllTaskList(tempAllTask)
        localStorage.finishedTaskList = JSON.stringify([])
        localStorage.allTaskList = JSON.stringify(tempAllTask)
    }


    const delTaskItem = (item) => {
        let tempAllTask = [...allTaskList]
        let {value, status} = item
        tempAllTask.splice(tempAllTask.findIndex(t => {return t.value === value && t.status === status}), 1)
        setAllTaskList(tempAllTask)
        localStorage.allTaskList = JSON.stringify(tempAllTask)
        if (status) {
            let tempList = [...finishedTaskList]
            tempList.splice(tempList.findIndex(t => {return t.value === value && t.status === status}), 1)
            setfinishedTaskList(tempList)
            localStorage.finishedTaskList = JSON.stringify(tempList)
        } else {
            let tempList = [...activeTaskList]
            tempList.splice(tempList.findIndex(t => {return t.value === value && t.status === status}), 1)
            setActiveTaskList(tempList)
            localStorage.finishedTaskList = JSON.stringify(tempList)
        }
    }

    const changeTaskStatus = (item) => {
        let tempAllTask = [...allTaskList]
        let {value, status} = item
        let tIndex = tempAllTask.findIndex(t => {return t.value === value && t.status === status})
        tempAllTask[tIndex].status = (!status)
        setAllTaskList(tempAllTask)
        localStorage.allTaskList = JSON.stringify(tempAllTask)
        if (status) {
            let tempFinList = [...finishedTaskList]
            let tempActList = [...activeTaskList]
            let lIndex = tempFinList.findIndex(t => {return t.value === value && t.status === status})
            let tempItem = tempFinList.splice(lIndex, 1)[0]
            tempItem.status = false
            tempActList.push(tempItem)
            setfinishedTaskList(tempFinList)
            setActiveTaskList(tempActList)
            localStorage.finishedTaskList = JSON.stringify(tempFinList)
            localStorage.activeTaskList = JSON.stringify(tempActList)
        } else {
            let tempFinList = [...finishedTaskList]
            let tempActList = [...activeTaskList]
            let lIndex = tempActList.findIndex(t => {return t.value === value && t.status === status})
            let tempItem = tempActList.splice(lIndex, 1)[0]
            tempItem.status = true
            tempFinList.push(tempItem)
            setfinishedTaskList(tempFinList)
            setActiveTaskList(tempActList)
            localStorage.finishedTaskList = JSON.stringify(tempFinList)
            localStorage.activeTaskList = JSON.stringify(tempActList)
        }
    }

    return (
    <div className="full-background">
        <div className="page-title">待办事项</div>
        <div className="all-content">
            <Head fold={fold} setFold={setFold} getTask={getTask}></Head>
            {mode === 'all' && !fold && allTaskList.map((item, index) => <TaskItem task={item} key={index} changeTaskStatus={changeTaskStatus} index={index} delTaskItem={delTaskItem} />)}
            {mode === 'active' && !fold && activeTaskList.map((item, index) => <TaskItem task={item} key={index} changeTaskStatus={changeTaskStatus} index={index} delTaskItem={delTaskItem} />)}
            {mode === 'finish' && !fold && finishedTaskList.map((item, index) => <TaskItem task={item} key={index} changeTaskStatus={changeTaskStatus} index={index} delTaskItem={delTaskItem} />)}
            <Foot mode={mode} clearFinish={clearFinish} changeMode={changeMode} taskNum={activeTaskList.length} completeNum={finishedTaskList.length} />
        </div>
    </div>
  );
}

export default App;