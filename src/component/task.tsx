import React from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../store/task-slice';
function Task() {
  const [task, setTask] = React.useState('');
  const dispatch = useDispatch();
  
  const handleTaskSubmit = (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    task !== '' && dispatch(addTask(task));
    setTask('');
  }
  return (
    <form  onSubmit={handleTaskSubmit} className='w-full m-b-0 text-center flex items-center justify-center gap-2 max-w-[500px] '>
        <input value={task}
        onChange={(e)=>{setTask(e.target.value)}}  type="text" className='border-1 border-gray-300 rounded-md p-2 w-full'  placeholder='Add new task'   />
        <button  className='bg-blue-500 w-32 text-white p-2 rounded-md'> Add</button>
    </form>
  )
}

export default Task