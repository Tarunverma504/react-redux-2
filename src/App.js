import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from "./actions/index";

function App() {

  const myState = useSelector((state)=> state.changeNumber);
  const dispatch = useDispatch();
  return (
      <div className="App">
        <h1>Increment/Decrement</h1>
        <div className='container'>
          <button onClick={()=> dispatch(decNumber())}>-</button>
          <input type="text" disabled value={myState}/>
          <button onClick={()=> dispatch(incNumber())}>+</button>
        </div>
      </div>
  );
}

export default App;
