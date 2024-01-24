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
  };

  let validInput = true;
  if (userInput.duration < 1) {
    validInput = false;
  }

  return (
    <>
      <Header />
      <UserInput inputData={userInput} onChangeInput={userInputHandler} />
      {validInput ? (
        <ResultsTable inputData={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than zero</p>
      )}
    </>
  );
}

export default App;
