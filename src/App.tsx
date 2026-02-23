 import './App.css'
import Task from './component/task'
import Filters from './component/filters'
import { Provider } from 'react-redux'
import { store } from './store/store'
import TaskList from './component/taskList'

function App() {
  return (
    <>
    <Provider store={store}>
    <div className='w-full max-w-[500px] m-auto flex-row flex-wrap flex items-center justify-center '>
      <h1 className='text-blue-500 w-full  font-bold text-4xl text-center my-10'>
        Task Manager      
      </h1>
      <Filters/>
      <Task/>
      <TaskList/>
    </div>
    </Provider>
    </>
  )
}

export default App
