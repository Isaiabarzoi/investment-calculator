import "./UserInput.css";

const UserInput = ({ inputData, onChangeInput }) => {
  const userInputHandler = (e) => {
    onChangeInput(e);
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={inputData.initialInvestment.toString()}
            onChange={userInputHandler}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={inputData.annualInvestment.toString()}
            onChange={userInputHandler}
          />
        </div>
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={inputData.expectedReturn.toString()}
            onChange={userInputHandler}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            value={inputData.duration.toString()}
            onChange={userInputHandler}
          />
        </div>
      </div>
    </section>
  );
};

export default UserInput;
