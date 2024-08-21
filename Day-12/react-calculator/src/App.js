import React, {useState,useCallback} from 'react';
import './App.css';

function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState(0);

  const handleChange = (e, setValue) => {
    setValue(e.target.value);
  };
  const subtraction = useCallback(() => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 - num2);
    } else {
      setResult(0);
    }
  });
  const addition = useCallback(() => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 + num2);
    } else {
      setResult(0);
    }
  });
  const multiplication = useCallback(() => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 * num2);
    } else {
      setResult(0);
    }
  });
  const division = useCallback(() => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 / num2);
    } else {
      setResult(0);
    }
  });
  return(
    <div className='calculator'>
    <input
      type="number"
      value={value1}
      onChange={(e) => handleChange(e, setValue1)}
    /><br/>
    <input
      type="number"
      value={value2}
      onChange={(e) => handleChange(e, setValue2)}
    /><br/>
    <button onClick={addition}>+</button>
    <button onClick={subtraction}>-</button>
    <button onClick={multiplication}>*</button>
    <button onClick={division}>/</button><br/>
    <p>Result: {result}</p>
  </div>
  )
}

export default App;
