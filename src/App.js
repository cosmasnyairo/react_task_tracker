import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './components/About'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      taskname: 'Learn Japanese',
      day: '2021-04-05T13:30',
      reminder: true,
    },
  ]
  )

  const [showAddTask, setshowAddTask] = useState(false)

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  //Add task
  const addTask = (task) => {

    const id = Math.floor(Math.random() * 1000 + 1)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <Router>   <div className="container">
      <Header onAddClicked={() => setshowAddTask(!showAddTask)} showAddTask={showAddTask} />

      <Route path='/' exact render={(props) => (<>
        {
          showAddTask ? <AddTask onAdd={addTask} />
            : <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder} />
        }<Footer />
      </>)} />
      <Route path='/about' component={About} />

    </div>
    </Router>

  );
}



export default App;
