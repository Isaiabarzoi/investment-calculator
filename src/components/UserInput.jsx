import { useState } from "react";
import "./UserInput.css";

const UserInput = ({ onSaveInput }) => {
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
      [name]: value,
    }));
    const inputData = {
      initialInvestment: +userInput.initialInvestment,
      annualInvestment: +userInput.annualInvestment,
      expectedReturn: +userInput.expectedReturn,
      duration: +userInput.duration,
    };
    onSaveInput(inputData);
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={userInputHandler}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={userInputHandler}
          />
        </div>
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={userInputHandler}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            onChange={userInputHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default UserInput;
