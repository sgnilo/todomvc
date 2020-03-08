import React, { useState } from 'react'

const Head = (props) => {
    const {fold, setFold, getTask} = props

    const [ev, setEv] = useState('')

    const customFold = () => {
        setFold(!fold)
    }

    const updateEv = (e) => {
        setEv(e.target.value)
    }

    const addTask = (e) => {
        if (e.key !=='Enter') return false
        if (!ev) return false
        getTask(ev)
        setEv('')
    }
    return <div className="head">
        <div className={`head-more${fold ? '' : ' more-active'}`} onClick={customFold}>></div>
        <input className="head-input" value={ev} placeholder="需要做什么?" onChange={updateEv} onKeyPress={addTask} />
    </div>
}

export default Head