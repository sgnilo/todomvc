import React, {useState, Fragment} from 'react';
import {Input, Table, Pagination} from 'antd'

const {Search} = Input
//import {Head, TaskItem, Foot} from '../components/index'

function App() {

    const [searchKey, setSearchKey] = useState('')

    const updateKey = (val) => {
        setSearchKey(val)
        console.log(searchKey)
    }

    const column = [
        {
            title: '序号',
            dataIndex: 'id',
            key: 'id'
        },{
            title: '接口名称',
            dataIndex: 'apiName',
            key: 'apiName'
        },{
            title: '调用应用',
            dataIndex: 'usingApp',
            key: 'usingApp'
        },{
            title: '接口描述',
            dataIndex: 'apiDiscribe',
            key: 'apiDiscribe'
        },{
            title: '所属机构',
            dataIndex: 'belong',
            key: 'belong'
        },{
            title: '申请时间',
            dataIndex: 'applyDate',
            key: 'applyDate'
        },{
            title: '',
            dataIndex: 'action',
            render: (item, record, index) => <div className="operate-box">
                <span onClick={() => {showDetail(index)}}>接口详情</span>
                <span onClick={() => {reApply(index)}}>重新申请</span>
            </div>
        }
    ]

    let tableData = []
    for (let index = 0; index < 100; index++) {
        let tempData = {
            key: String(index),
            id: index,
            apiName: `数据共享接口${index}`,
            usingApp: `这是应用名称${index}`,
            apiDiscribe: '这是接口描述',
            belong: '企业1群组1子群组1',
            applyDate: '2020-03-10 10:20:00'
        }
        tableData.push(tempData)
    }

    console.log(tableData)

    const showDetail = (index) => {
        console.log(tableData[index])
    }

    const reApply = (index) => {
        console.log(tableData[index])
    }

    const setClassName = (record, index) => {
        return `custom-row-style${index % 2 === 0 ? ' row-even' : ''}`
    }

    const onSizeChange = (current, pageSize) => {
        console.log(current, pageSize)
    }

    const tablePage = {
        showTotal: val => `共${val}条`,
        showSizeChanger: true,
        showQuickJumper: true,
        onShowSizeChange: onSizeChange,
    }

    // const [fold, setFold] = useState(false)

    // const [activeTaskList, setActiveTaskList] = useState(JSON.parse(localStorage.activeTaskList || '[]'))

    // const [finishedTaskList, setfinishedTaskList] = useState(JSON.parse(localStorage.finishedTaskList || '[]'))

    // const [allTaskList, setAllTaskList] = useState(JSON.parse(localStorage.allTaskList || '[]'))

    // const [mode, setMode] = useState('all')   //all | active | finish

    // const getTask = (val) => {
    //     let task = {
    //         value: val,
    //         status: false
    //     }
    //     let tempList = [...activeTaskList]
    //     let tempAllTask = [...allTaskList]
    //     tempAllTask.push({...task})
    //     tempList.push({...task})
    //     setActiveTaskList(tempList)
    //     setAllTaskList(tempAllTask)
    //     localStorage.activeTaskList = JSON.stringify(tempList)
    //     localStorage.allTaskList = JSON.stringify(tempAllTask)
    // }

    // const changeMode = (m) => {
    //     setMode(m)
    // }

    // const clearFinish = () => {
    //     let len = finishedTaskList.length
    //     let tempAllTask = [...allTaskList]
    //     for (let i = 0; i < len; i++) {
    //         tempAllTask.splice(tempAllTask.findIndex(task => task.status), 1)
    //     }
    //     setfinishedTaskList([])
    //     setAllTaskList(tempAllTask)
    //     localStorage.finishedTaskList = JSON.stringify([])
    //     localStorage.allTaskList = JSON.stringify(tempAllTask)
    // }


    // const delTaskItem = (item) => {
    //     let tempAllTask = [...allTaskList]
    //     let {value, status} = item
    //     tempAllTask.splice(tempAllTask.findIndex(t => {return t.value === value && t.status === status}), 1)
    //     setAllTaskList(tempAllTask)
    //     localStorage.allTaskList = JSON.stringify(tempAllTask)
    //     if (status) {
    //         let tempList = [...finishedTaskList]
    //         tempList.splice(tempList.findIndex(t => {return t.value === value && t.status === status}), 1)
    //         setfinishedTaskList(tempList)
    //         localStorage.finishedTaskList = JSON.stringify(tempList)
    //     } else {
    //         let tempList = [...activeTaskList]
    //         tempList.splice(tempList.findIndex(t => {return t.value === value && t.status === status}), 1)
    //         setActiveTaskList(tempList)
    //         localStorage.finishedTaskList = JSON.stringify(tempList)
    //     }
    // }

    // const changeTaskStatus = (item) => {
    //     let tempAllTask = [...allTaskList]
    //     let {value, status} = item
    //     let tIndex = tempAllTask.findIndex(t => {return t.value === value && t.status === status})
    //     tempAllTask[tIndex].status = (!status)
    //     setAllTaskList(tempAllTask)
    //     localStorage.allTaskList = JSON.stringify(tempAllTask)
    //     if (status) {
    //         let tempFinList = [...finishedTaskList]
    //         let tempActList = [...activeTaskList]
    //         let lIndex = tempFinList.findIndex(t => {return t.value === value && t.status === status})
    //         let tempItem = tempFinList.splice(lIndex, 1)[0]
    //         tempItem.status = false
    //         tempActList.push(tempItem)
    //         setfinishedTaskList(tempFinList)
    //         setActiveTaskList(tempActList)
    //         localStorage.finishedTaskList = JSON.stringify(tempFinList)
    //         localStorage.activeTaskList = JSON.stringify(tempActList)
    //     } else {
    //         let tempFinList = [...finishedTaskList]
    //         let tempActList = [...activeTaskList]
    //         let lIndex = tempActList.findIndex(t => {return t.value === value && t.status === status})
    //         let tempItem = tempActList.splice(lIndex, 1)[0]
    //         tempItem.status = true
    //         tempFinList.push(tempItem)
    //         setfinishedTaskList(tempFinList)
    //         setActiveTaskList(tempActList)
    //         localStorage.finishedTaskList = JSON.stringify(tempFinList)
    //         localStorage.activeTaskList = JSON.stringify(tempActList)
    //     }
    // }

    return (
    <div className="full-background">
        {/* <div className="page-title">待办事项</div>
        <div className="all-content">
            <Head fold={fold} setFold={setFold} getTask={getTask}></Head>
            {mode === 'all' && !fold && allTaskList.map((item, index) => <TaskItem task={item} key={index} changeTaskStatus={changeTaskStatus} index={index} delTaskItem={delTaskItem} />)}
            {mode === 'active' && !fold && activeTaskList.map((item, index) => <TaskItem task={item} key={index} changeTaskStatus={changeTaskStatus} index={index} delTaskItem={delTaskItem} />)}
            {mode === 'finish' && !fold && finishedTaskList.map((item, index) => <TaskItem task={item} key={index} changeTaskStatus={changeTaskStatus} index={index} delTaskItem={delTaskItem} />)}
            <Foot mode={mode} clearFinish={clearFinish} changeMode={changeMode} taskNum={activeTaskList.length} completeNum={finishedTaskList.length} />
        </div> */}
        <div className="search-area">
            <Search placeholder="搜索接口名称" onSearch={updateKey} className="custom-search" />
        </div>
        <div className="table-area">
            <Table columns={column} dataSource={tableData} rowClassName={setClassName} pagination={tablePage} />
        </div>
    </div>
  );
}

export default App;