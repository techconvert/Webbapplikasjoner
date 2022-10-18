import { useState } from 'react'

export default function Calculator() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [result, setResult] = useState(0)

  const add = () => setResult(value1 + value2)
  const subtract = () => setResult(value1 - value2)
  const multiply = () => setResult(value1 * value2)
  const divide = () => setResult(value1 / value2)

  // ToDo: Skriv om med ternary operator
  function handleChange(e) {
    if(isNaN(e.target.value)) {
      throw new Error({ code : 501, message : "The text entered isn't a number" })
    }
    if (e.target.id === "inputValue1") {
      setValue1(+e.target.value);
    } else if (e.target.id === "inputValue2") {
      setValue2(+e.target.value);
    }
  }

    return (
        <div>
          <p>Calculator! </p>
          <p id="resultText">Result is: {result}</p>
          <input id="inputValue1" type="text" onChange={handleChange} value={value1}/>
          <input id="inputValue2" type="text" onChange={handleChange} value={value2}/>
          <button id="addButton" onClick={add}>Add</button>
          <button id="subtractButton" onClick={subtract}>Subtract</button>
          <button id="multiplyButton" onClick={multiply}>Multiply</button>
          <button id="divideButton" onClick={divide}>Divide</button>
        </div>
      )
}