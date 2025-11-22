"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  document.title = "Todo_list"

  const [task, settask] = useState("")
  const [task_list, settask_list] = useState([])
  const [finished, setfinished] = useState(true)

  const toggle_finishted = (e) => {
    setfinished(!finished)

  }

  useEffect(() => {
    let load = JSON.parse(localStorage.getItem("task_list"))
    if (load) {
      let load = JSON.parse(localStorage.getItem("task_list"))

      settask_list(load)
    }



  }, [])


  const save_local = (e) => {
    localStorage.setItem("task_list", JSON.stringify(task_list))
  }


  const edit_btn = (e, id) => {
    let edit = task_list.filter(e => e.id === id)
    settask(edit[0].task)
    let new_task = task_list.filter(items => {
      return items.id !== id;
    })
    settask_list(new_task)
    save_local()

  }


  const delete_btn = (e, id) => {
    if (confirm("Are you sure you want to delete this task?")) {
      let new_task = task_list.filter(items => {
        return items.id !== id;
      })
      settask_list(new_task)

      console.log("Task deleted!");
      save_local()
    }
    else {
      console.log("Action canceled.");
    }
  }


  const add_btn = () => {
    if (task === "") {
      alert(" Please enter a task before adding!");
    }
    // console.log(task_list)
    else {
      settask_list([...task_list, { id: uuidv4(), task, completed_task: false }])
      settask("")
      save_local()

    }

  }



  const change_btn = (e) => {
    settask(e.target.value)

  }


  const check_mark = (e) => {
    let id = e.target.name
    // console.log("this is id ",id)
    let index = task_list.findIndex(e => {
      return e.id == id;
    })
    // console.log("this is index"+index)
    let new_task = [...task_list];
    task_list[index].completed_task = !task_list[index].completed_task
    settask_list(new_task)
    save_local()
  }

  const moble_view = () => {
    console.log("hello")
    const div_el = document.createElement('div');
    div_el.className = 'flex flex-col justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm';
    div_el.innerHTML = `
            <div id="mobileMenu" className="hidden md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200">
            <ul className="flex flex-col space-y-2 p-4 text-gray-700 font-medium">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
              <li><Link href="contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
            `;

  }

  // const taskInput = document.getElementById('taskInput');
  // const addTaskBtn = document.getElementById('addTaskBtn');
  // const taskList = document.getElementById('taskList');

  // addTaskBtn.addEventListener('click', () => {

  //   const taskText = taskInput.value.trim();
  //   if (taskText === '') return;

  //   const li = document.createElement('li');
  //   li.className = 'flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm';
  //   li.innerHTML = `
  //           <span class="flex-grow">${taskText}</span>
  //           <button class="text-red-500 hover:text-red-700 transition">
  //           ✕

  //           <img src="trash.svg" alt="trash" width={22} />
  //           </button>
  //           `;

  //   li.querySelector('button').addEventListener('click', () => li.remove());
  //   taskList.appendChild(li);
  //   taskInput.value = '';
  // });

  // taskInput.addEventListener('keypress', (e) => {
  //   if (e.key === 'Enter') addTaskBtn.click();
  // });






  // tailwind.config = {
  //   theme: {
  //     extend: {
  //       colors: {
  //         primary: '#6366F1', // Indigo-500
  //       },
  //     },
  //   },
  // }


  return (
    <>
      {/* <RouterProvider router={route} /> */}

      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">

        <div className="backdrop-blur-md bg-white/70 fixed w-full  top-0 z-50 border-b border-gray-200 mx-auto  ">
          <div className=" px-4 py-3 flex justify-between items-center ml-8 mx-auto w-full  ">

            <div className="text-2xl font-bold text-primary tracking-tight flex items-center justify-center ml-10 lg:ml-60">
              {/* <?xml version="1.0" encoding="UTF-8"?> */}
              <Link href="/">
              <span className='inline-block '>
                <svg width="50px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#000000"  d="M4,4 L9,4 C9.55228,4 10,3.55228 10,3 C10,2.44772 9.55228,2 9,2 L4,2 C2.89543,2 2,2.89543 2,4 L2,12 C2,13.1046 2.89543,14 4,14 L12,14 C13.1046,14 14,13.1046 14,12 L14,10 C14,9.44771 13.5523,9 13,9 C12.4477,9 12,9.44771 12,10 L12,12 L4,12 L4,4 Z M15.2071,2.29289 C14.8166,1.90237 14.1834,1.90237 13.7929,2.29289 L8.5,7.58579 L7.70711,6.79289 C7.31658,6.40237 6.68342,6.40237 6.29289,6.79289 C5.90237,7.18342 5.90237,7.81658 6.29289,8.20711 L7.79289,9.70711 C7.98043,9.89464 8.23478,10 8.5,10 C8.76522,10 9.01957,9.89464 9.20711,9.70711 L15.2071,3.70711 C15.5976,3.31658 15.5976,2.68342 15.2071,2.29289 Z" />
                </svg>
              </span>
              </Link>
              <span className='' >ToDo</span>
              <span className="text-gray-700">List</span>
            </div>

            <ul className="hidden md:flex space-x-6 text-gray-600 font-medium mr-18 lg:mr-70 ">
              <li><Link href="/" className="hover:text-primary transition hover:text-blue-500">Home</Link></li>
              <li><Link href="/about" className=" hover:text-blue-500 hover:text-primary  transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-primary hover:text-blue-500 transition">Contact</Link></li>
            </ul>



            <button onClick={moble_view} id="menuBtn" className="md:hidden text-gray-600 hover:text-primary transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-32 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m0 6H4" />
              </svg>
            </button>
          </div>

          <div id="mobileMenu" className="hidden md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200">
            <ul className="flex flex-col space-y-2 p-4 text-gray-700 font-medium">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
              <li><Link href="contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
        </div>


        <main className="flex-grow flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-5xl top-10 bg-white rounded-xl shadow-lg p-6 relative ">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">My Tasks</h2>


            <div className="flex pb-4 space-x-4  ">
              <input onChange={change_btn} value={task} id="taskInput" type="text" placeholder="Add a new task..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black min-w-2 placeholder-purple-700   " />




              <button id="addTaskBtn" onClick={add_btn}
                className="bg-indigo-600 text-white px-4 py-2 rounded-4xl hover:bg-indigo-700 transition">
                Add
              </button>
            </div>

            <input type="checkbox" onChange={toggle_finishted} checked={finished} /> Finished Task
            {task_list.length === 0 && <div class="flex flex-col items-center justify-center h-48 bg-gray-50 border-2  border-gray-300 rounded-3xl shadow-sm text-center">
              <p class="text-3xl font-semibold text-gray-600 mb-1">No Tasks</p>
              <p class="text-red-900 text-lg">Please add a task to get started</p>
            </div>
            }

            {task_list.map(items => {


              return (finished || !items.completed_task) && <ul id="taskList" className="space-y-2 justify-between flex rounded-2xl shadow-lg   border-gray-700 p-4">
                <div key={items.id} className='flex space-x-4'>

                  <input onChange={check_mark} type="checkbox" checked={items.completed_task} id="" name={items.id} />
                  <div class='text-sm sm:text-sm md:text-lg  max-w-35 md:max-w-120 ' className={items.completed_task ? "line-through" : ""} >
                    <p className=' break-words w-180  max-w-35 md:max-w-120'>

                      {items.task}
                    </p>

                  </div>
                </div>


                <span className=' flex w-40 '>

                  <button onClick={(e) => { edit_btn(e, items.id) }} className='cursor-pointer ml-2 min-w-[50px]'>

                    <svg
                      className="cursor-pointer " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                  </button>

                  <button onClick={(e) => { delete_btn(e, items.id) }} className='cursor-pointer  min-w-[50px]'>
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" viewBox="0 0 64 64">
                      <path d="M 28 11 C 26.895 11 26 11.895 26 13 L 26 14 L 13 14 C 11.896 14 11 14.896 11 16 C 11 17.104 11.896 18 13 18 L 14.160156 18 L 16.701172 48.498047 C 16.957172 51.583047 19.585641 54 22.681641 54 L 41.318359 54 C 44.414359 54 47.041828 51.583047 47.298828 48.498047 L 49.839844 18 L 51 18 C 52.104 18 53 17.104 53 16 C 53 14.896 52.104 14 51 14 L 38 14 L 38 13 C 38 11.895 37.105 11 36 11 L 28 11 z M 18.173828 18 L 45.828125 18 L 43.3125 48.166016 C 43.2265 49.194016 42.352313 50 41.320312 50 L 22.681641 50 C 21.648641 50 20.7725 49.194016 20.6875 48.166016 L 18.173828 18 z"></path>
                    </svg>

                  </button>
                </span>


              </ul>
            })}
          </div>
        </main>


        <footer className="bg-white shadow-inner py-6 hidden md:block  ">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-500 text-sm">
            © 2025 To-Do List App — Built with ❤️ and Tailwind CSS
          </div>
        </footer>

      </div>
    </>



  )
}

export default App
