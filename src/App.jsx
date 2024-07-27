import { useState } from "react"

import Header from "./components/Header"
import UserInput from "./components/userInput"
import Result from "./components/Result";

function App() {

  const [investmentValues, setInvestmentValues] = useState({
    initialInvestment: undefined,
    annualInvestment: undefined,
    expectedReturn: undefined,
    duration: undefined,
  });

  const inputIsValid = investmentValues.duration >= 1;

  function handleInput(inputIdentifier, newValue) {
    setInvestmentValues(prevValues => {
      return {
        ...prevValues,
        [inputIdentifier]: +newValue
      }
    })    
  };

  return (
    <>
      <Header />
      <UserInput onInput={handleInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
      {inputIsValid && <Result values={investmentValues} />}
       
    </>
  )
}

export default App

