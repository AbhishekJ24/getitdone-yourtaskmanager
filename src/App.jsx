/* eslint-disable no-unused-vars */
import { React, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { v4 as uuidv4 } from 'uuid'


function App() {
  // STATE TO HOLD THE TASKS ONE AT A TIME
  const [task, setTask] = useState("")

  // STATE TO HOLD THE COLLECTION OF TASKS
  const [tasks, setTasks] = useState([])

  const [savebtn, setSavebtn] = useState("Add Task")

  // A FUNCTION TO HANDLE ADDITION OF A NEW TASK
  const handleAdd = () => {
    setSavebtn("Add Task")
    if (task !== "")
      setTasks([...tasks, { id: uuidv4(), task, isCompleted: false }])
    setTask("")
  }

  // FUNCTION TO HANDLE CHECKBOXES, THIS ENSURES THE TOGGLING OF CHECKBOXES INDICATING COMPLETED/NOT COMPLETED STATUS
  const handleCheckBox = (e) => {
    let id = e.target.name
    let index = tasks.findIndex(item => {
      return item.id === id
    })
    let newTasks = [...tasks]
    newTasks[index].isCompleted = !newTasks[index].isCompleted
    setTasks(newTasks)
  }

  // FUNCTION TO HANDLE EDIT TASKS FEATURES, THIS MOVE THE THE TASK IN CONTEXT TO THE INPUT BAR FOLLOWED BY REMOVING IT FROM THE LIST
  const handleEdit = (e, id) => {
    setSavebtn("Update Task")
    let t = tasks.filter(item => item.id === id)
    setTask(t[0].task)
    let newTasks = tasks.filter(item => {
      return item.id !== id
    })
    setTasks(newTasks)
  }

  // THIS FUNCTION HANDLES DELETE OPERATION OVER TASKS
  const handleDelete = (id) => {
    let conf = confirm("Are you sure you want to delete this task?")
    let newTasks
    if (conf) {
      newTasks = tasks.filter(item => {
        return item.id !== id
      })
      setTasks(newTasks)
    }
  }

  // THIS IS KIND OF A COMMON FUNCTION USED TO DEAL WITH HANDLING CHANGES IN INPUT FIELDS
  const handleChange = (e) => {
    setTask(e.target.value)
  }



  return (
    <>
      {/* MY NAVBAR COMPONENT */}
      <Navbar />

      {/* THIS IS A CONTAINER FOR ALL OF MY TASKS AND THE BUTTONS ASSOCIATED WITH IT */}
      <div className='min-h-[70vh] w-1/2 m-auto bg-violet-100 rounded-3xl p-8'>

        {/* THIS IS THE TASK ADDING DIV FOR THE TASK MANAGER */}
        <div className='flex gap-5 items-center justify-center mb-10'>
          <input onChange={handleChange} value={task} className='py-2 px-4 w-3/4 rounded-xl focus:outline-none' type="text" placeholder='Your Task' />
          <button onClick={handleAdd} className='bg-violet-950 text-violet-50 hover:bg-violet-900 p-2 rounded-lg text-sm'>{savebtn}</button>
        </div>

        {/* HERE COMES THE TASKS OR TODOS */}
        <div className="todos">

          <h2 className='text-xl mb-4 font-extrabold'>Your ToDo List:</h2>

          {/* THIS IS USED TO DISPLAY NO TASKS TO DISPLAY IF THERE ARE NO TASKS INSIDE */}
          {tasks.length === 0 && <div>No Tasks to Display Yet</div>}

          {/* HERE, I HAVE USED THE MAP FUNCTION TO UNROLL THE TASKS STATE AND ACCESS ITS PROPERTIES LIKE:
          ID, TASK DESCRIPTION, ISCOMPLETED STATUS */}
          {tasks.map(item => {

            {/* THIS IS THE DIV SECTION TO HOLD THE TASKS OR TODOS
                  I HAVE DISPLAYED THE TASKS ONE BY ONE
                  THE TASKS FOLLOWS THIS REPRESENTATION FORMAT:
                  ISCOMPLETED -> TASK DESCRIPTION -> EDIT BUTTON -> DELETE BUTTON */}
            return <div key={item.id} className="todo flex justify-between items-center mb-2">
              <div className='flex gap-4'>
                <input type="checkbox" name={item.id} value={item.isCompleted} onChange={handleCheckBox} />
                <div className={item.isCompleted ? "line-through font-thin" : "font-medium"}> {item.task} </div>
              </div>
              <div className='btns flex gap-4'>
                <button onClick={(e) => {
                  handleEdit(e, item.id)
                }
                } className='bg-violet-950 text-violet-50 hover:bg-violet-900 p-2 rounded-lg text-sm'>Edit</button>
                <button onClick={(e) => handleDelete(item.id)} className='bg-violet-950 text-violet-50 hover:bg-violet-900 p-2 rounded-lg text-sm'>Delete</button>
              </div>
            </div>
          })}

        </div>

      </div>

      {/* MY FOOTER COMPONENT */}
      <Footer />
    </>
  )
}

export default App
