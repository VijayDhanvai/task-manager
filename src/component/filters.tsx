import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterTasks } from '../store/task-slice';

function Filters() {

    const dispatch = useDispatch();
    const filterby = useSelector((state: any) => state.filterBy);

  return (
    <div className='flex gap-2 content-center justify-center my-5 w-full'>
        <button onClick={()=>dispatch(filterTasks('all'))} className={` ${filterby === 'all' ? 'ring-2 ring-blue-700' : ''} cursor-pointer bg-blue-500 w-32 text-white p-2 rounded-md`}>All</button>
        <button onClick={()=>dispatch(filterTasks('completed'))} className={`cursor-pointer bg-green-500 w-32 text-white p-2 rounded-md ${filterby === 'completed' ? 'ring-2 ring-green-700' : ''}`}>Completed</button>
        <button onClick={()=>dispatch(filterTasks('pending'))} className={`cursor-pointer bg-yellow-500 w-32 text-white p-2 rounded-md ${filterby === 'pending' ? 'ring-2 ring-yellow-700' : ''}`}>Pending</button>
    </div>
    
  )
}

export default Filters