/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const handleAdd = () => {
    setTasks([...tasks, { id: uuidv4(), task, isCompleted: false }])
    setTask("")
  }

  const handleCheckBox = (e) => {
    let id = e.target.name
    let index = tasks.findIndex(item => {
      return item.id === id
    })
    let newTasks = [...tasks]
    newTasks[index].isCompleted = !newTasks[index].isCompleted
    setTasks[newTasks]
  }

  const handleEdit = () => {

  }


  const handleDelete = (id) => {
    let newTasks = tasks.filter(item=>{
      return item.id !== id
    })
    setTasks[newTasks]
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }



  return (
    <>
      <Navbar />


      <div className='min-h-[70vh] w-1/2 m-auto bg-violet-100 rounded-3xl p-8'>
        <div className='flex gap-5 items-center justify-center mb-10'>
          <input onChange={handleChange} value={task} className='py-2 px-4 w-3/4 rounded-xl focus:outline-none' type="text" placeholder='Your Task' />
          <button onClick={handleAdd} className='bg-violet-950 text-violet-50 hover:bg-violet-900 p-2 rounded-lg text-sm'>Add Task</button>
        </div>



        <div className="todos">
          <h2 className='text-xl mb-4 font-extrabold'>Your ToDo List:</h2>
          {tasks.length == 0 && <div>No Tasks to Display Yet</div>}
          {tasks.map(item => {

            return <div key={item.id} className="todo flex justify-between items-center mb-2">

              <div className='flex gap-4'>
                <input type="checkbox" name={item.id} value={item.isCompleted} onChange={handleCheckBox} />
                <div className={item.isCompleted ? "line-through font-thin" : "font-medium"}> {item.task} </div>
              </div>
              <div className='btns flex gap-4'>
                <button onClick={handleEdit} className='bg-violet-950 text-violet-50 hover:bg-violet-900 p-2 rounded-lg text-sm'>Edit</button>
                <button onClick={() => handleDelete(item.id)} className='bg-violet-950 text-violet-50 hover:bg-violet-900 p-2 rounded-lg text-sm'>Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>


      <Footer />
    </>
  )
}

export default App
