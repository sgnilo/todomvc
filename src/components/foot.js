import React from 'react'

const Foot = (props) => {

    const {clearFinish, mode, changeMode, taskNum, completeNum} = props

    return <div className="foot">
        <span>剩{taskNum}个待办</span>
        <div className="middle-operate">
            <div className={`operate-item${mode === 'all' ? ' operate-active' : ''}`} onClick={() => {changeMode('all')}}>所有</div>
            <div className={`operate-item${mode === 'active' ? ' operate-active' : ''}`} onClick={() => {changeMode('active')}}>待办</div>
            <div className={`operate-item${mode === 'finish' ? ' operate-active' : ''}`} onClick={() => {changeMode('finish')}}>已完成</div>
        </div>
        {completeNum ? <span className="clear-finish" onClick={clearFinish}>清除已完成</span> : <span></span>}
    </div>
}

export default Foot