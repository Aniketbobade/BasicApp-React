import { useState } from "react";
import "./App.css";

function App() {

  const[count, setCount]= useState(0);

  function decrementHandler(){
    setCount(count-1);
  };

  function increamentHandler(){
    setCount(count+1);
  };

  function resetHandler(){
    setCount(0);
  };

  return (
   <div className="container w-[100vw] h-[100vh] flex justify-center mx-auto">
    <div className="wrapper">
    <h4 className="heading">Increment And Decrement</h4>
    <div className="main-section gap-12 py-3">
      <button className="borer-r-2 text-center border-black text-5xl" onClick={decrementHandler}>-</button>
      <div className="value borer-r-2 text-center border-black text-5xl">
        {count}
      </div>
      <button className="increment borer-r-2 text-center border-black text-5xl" onClick={increamentHandler}>+</button>
    </div>
    <button className="reset mt-3 text-center text-3xl" onClick={resetHandler}>Reset</button>
   </div>
   </div>
  );
}

export default App;
