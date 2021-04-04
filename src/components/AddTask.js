import { useState } from 'react'

function AddTask({ onAdd }) {
    const [taskname, setTaskName] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!taskname) {
            alert('Please add a task')
        }

        if (!day) {
            alert('Please add a date')
            return
        }
        console.log(day)
        onAdd({ taskname, day, reminder })
        setTaskName('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label> Task</label>
                <input type='text' placeholder='Add task' value={taskname} onChange={(e) => setTaskName(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label> Day & Time </label>
                <input type='datetime-local' placeholder='Add day & time' value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check' >
                <label> Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='Save task ' className='btn btn-block' />
        </form >
    )
}

export default AddTask
