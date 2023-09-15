import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store'
import { decrement, increment } from './redux/features/counter/counterSlice';

function App() {

  const {count} = useSelector((state:RootState) => state.conter)
  const dispatch = useDispatch()
  return (
    <div className='flex h-[100vh] items-center justify-center'>
      <div className="flex gap-4 items-center">
        <div>
           <button className="btn" onClick={()=> dispatch(increment())}>Increment</button>
        </div>
        <div>
           <p className='counter'>Count: <span> {count}</span></p>
        </div>
        <div>
          <button className="btn" onClick={()=> dispatch(decrement())}> Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default App
