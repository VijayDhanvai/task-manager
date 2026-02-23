import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, toggleTask, } from "../store/task-slice";

interface RootState {
  filterBy: any;
  tasks: any[];
}

function TaskList() {
  const tasks = useSelector((state: RootState) => state.tasks);
  const filterBy = useSelector((state: RootState) => state.filterBy);
  const dispatch = useDispatch();

   return (
    <div className="w-full mt-5 flex flex-col items-center justify-center gap-2 max-w-[500px] ">
      {tasks.map((task) => {
        return (
          (filterBy === task.status || filterBy === 'all') && <div
            key={task.id}
            className="w-full flex items-center justify-between gap-5  bg-gray-100 border-gray-300 rounded-md p-2  "
          >
            <p className=" ">{task.title}</p>
            <button
              className="ml-auto cursor-pointer"
              onClick={() => dispatch(toggleTask(task.id))}
            >
                {task.status ==='completed' ? <span className="text-green-500">&#x2713;</span> : <span className="text-yellow-500">⏳</span>}  
            </button>
            <button className="cursor-pointer" onClick={() => dispatch(removeTask(task.id))}>
              &#x274C;
            </button>
          </div>
 
        );
      })}
     </div>
  );
}

export default TaskList;
