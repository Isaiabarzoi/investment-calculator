import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: +value,
    }));
    // const inputData = {
    //   initialInvestment: +userInput.initialInvestment,
    //   annualInvestment: +userInput.annualInvestment,
    //   expectedReturn: +userInput.expectedReturn,
    //   duration: +userInput.duration,
    // };
    // onSaveInput(inputData);
  };

  return (
    <>
      <Header />
      <UserInput inputData={userInput} onChangeInput={userInputHandler} />
      <ResultsTable inputData={userInput} />
    </>
  );
}

export default App;
