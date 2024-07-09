import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const ButtonBox = () => {
  const [value, setValue] = useState("");
  const [animation, setAnimation] = useState("");

  const changeHandler = (event) => {
    setValue((prevState) => prevState + event.target.textContent);
  };

  const backspaceHandler = () => {
    setValue((prevState) => prevState.slice(0, -1));
  };

  const clearHandler = () => {
    setValue("");
  };

  const replaceSymbols = (str) => {
    return str.replace(/×/g, '*').replace(/÷/g, '/');
  };

  const calculateHandler = () => {
    try {
      const sanitizedValue = replaceSymbols(value);
      const result = eval(sanitizedValue);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error("Invalid expression");
      }
      setValue(String(result));
      setAnimation('animate__animated animate__fadeIn');
      setTimeout(() => setAnimation(''), 1000);
    } catch (error) {
      if (error.message.includes("division by zero")) {
        toast.error("Cannot divide by zero");
      } else {
        toast.error("Invalid expression");
      }
      setValue("");
    }
  };

  return (
    <div className='flex flex-col gap-y-4'>
      <form>
        <input
          className={`w-full h-[60px] text-right font-medium text-[28px] border border-gray-300 rounded-lg p-2 ${animation}`}
          type="text"
          value={value}
          readOnly
        />
      </form>
      <div className='grid grid-cols-4 gap-3'>
        <button onClick={clearHandler} className='col-span-2 bg-red-500 text-white rounded-lg p-4 hover:bg-red-600 transition-all duration-200'>Clear</button>
        <button onClick={backspaceHandler} className='bg-gray-200 rounded-lg p-4 hover:bg-gray-300 transition-all duration-200'>C</button>
        <button onClick={changeHandler} className='bg-yellow-400 rounded-lg p-4 hover:bg-yellow-500 transition-all duration-200'>&divide;</button>
        <button onClick={changeHandler} className='bg-blue-400 text-white rounded-lg p-4 hover:bg-blue-500 transition-all duration-200'>7</button>
        <button onClick={changeHandler} className='bg-blue-400 text-white rounded-lg p-4 hover:bg-blue-500 transition-all duration-200'>8</button>
        <button onClick={changeHandler} className='bg-blue-400 text-white rounded-lg p-4 hover:bg-blue-500 transition-all duration-200'>9</button>
        <button onClick={changeHandler} className='bg-yellow-400 rounded-lg p-4 hover:bg-yellow-500 transition-all duration-200'>&times;</button>
        <button onClick={changeHandler} className='bg-green-400 text-white rounded-lg p-4 hover:bg-green-500 transition-all duration-200'>4</button>
        <button onClick={changeHandler} className='bg-green-400 text-white rounded-lg p-4 hover:bg-green-500 transition-all duration-200'>5</button>
        <button onClick={changeHandler} className='bg-green-400 text-white rounded-lg p-4 hover:bg-green-500 transition-all duration-200'>6</button>
        <button onClick={changeHandler} className='bg-yellow-400 rounded-lg p-4 hover:bg-yellow-500 transition-all duration-200'>&ndash;</button>
        <button onClick={changeHandler} className='bg-purple-400 text-white rounded-lg p-4 hover:bg-purple-500 transition-all duration-200'>1</button>
        <button onClick={changeHandler} className='bg-purple-400 text-white rounded-lg p-4 hover:bg-purple-500 transition-all duration-200'>2</button>
        <button onClick={changeHandler} className='bg-purple-400 text-white rounded-lg p-4 hover:bg-purple-500 transition-all duration-200'>3</button>
        <button onClick={changeHandler} className='bg-yellow-400 rounded-lg p-4 hover:bg-yellow-500 transition-all duration-200'>+</button>
        <button onClick={changeHandler} className='col-span-2 bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-all duration-200'>0</button>
        <button onClick={changeHandler} className='bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-all duration-200'>.</button>
        <button onClick={calculateHandler} className='bg-blue-500 text-white rounded-lg p-4 hover:bg-blue-600 transition-all duration-200'>=</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ButtonBox;
