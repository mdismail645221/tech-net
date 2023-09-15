import './App.css';
import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {

  const {count} = useAppSelector((state) => state.conter)
  const dispatch = useAppDispatch()
  return (
    <div className='flex h-[100vh] items-center justify-center'>
      <div className="flex gap-4 items-center">
        <div>
           <button className="btn" onClick={()=> dispatch(increment(2))}>Increment</button>
        </div>
        <div>
           <p className='counter'>Count: <span> {count}</span></p>
        </div>
        <div>
          <button className="btn" onClick={()=> dispatch(decrement(2))}> Decrement</button>
        </div>
        <div>
          <button className='btn_increment_by_ammont' onClick={()=> dispatch(incrementByAmount(10))}>Increment By Amount</button>
        </div>
      </div>
    </div>
  )
}

export default App
