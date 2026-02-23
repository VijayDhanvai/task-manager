import { createSlice, nanoid } from "@reduxjs/toolkit";
 
interface Task {
    id: string;
    title: string;
    status:  string
}

interface TaskState {
    tasks: Task[];
    filterBy: 'all' | 'completed' | 'pending';
}

const taskSLice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        filterBy: 'all'
    } as TaskState,
    reducers: {
        addTask: {
            reducer: (state, action) => {
                state.tasks.push(action.payload);
            },
            prepare: (title: string,) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        status:'pending'
                    }
                }
            }
        }, 
        removeTask : (state, action) =>{
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }, 
        toggleTask : (state, action) =>{
          state.tasks = state.tasks.map(task=>{
            return task.id === action.payload ? {
                ...task,
                status :  task.status === "pending" ? "completed" : "pending"
            } : task
          })   
        }, 
        filterTasks : (state, action) =>{
            state.filterBy = action.payload;
        }
    },
})


export const { addTask, removeTask, toggleTask, filterTasks } = taskSLice.actions;
export default taskSLice.reducer; 