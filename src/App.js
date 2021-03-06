import { useState } from "react"
import Header from './component/Header';
import Tasks from './component/Tasks' 
import AddTask from "./component/AddTask";

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 02:30pm',
      reminder: true
    },
    {
      id:2,
      text: 'Playing cricket',
      day: 'Feb 8th at 02:30pm',
      reminder: true
    },
    {
      id:3,
      text: 'Food shooping',
      day: 'Feb 10th at 02:30pm',
      reminder: true
    }
  ])

//Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

// Delete task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder:!task.reminder} : task))
}


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onAdd={addTask}  />) : ('No Tasks To Show')}
    </div>
  );
}

export default App;

// class App extends React.Component {
//   render() {
//     return (
//       <h1>Hello</h1>
//     )
//   }
// }