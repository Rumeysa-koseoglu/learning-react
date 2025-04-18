import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice"; //we imported decrement and increment functions from counterSlice.jxs

function App() {
  const dispatch = useDispatch();

  const counter = useSelector((store) => store.counter); //we used useSelector to read store data in component
  console.log(counter); //we access the initialState in counterSlice with (counter)

  return (
    <>
      <div>
        <div>{counter.value}</div>
        <div>
          <button onClick={() => dispatch(increment())}>increase</button> {/**we called increment function from the counterSlice reducers using dispatch */}
          <button onClick={() => dispatch(decrement())}>decrease</button>{/**we called decrement function from counterSlice reducers using dispatch */}
        </div>
      </div>
    </>
  );
}

export default App;
