import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: 
          !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} /> : 'Nothing to see here'}
    </div>
  );
}

export default App;
