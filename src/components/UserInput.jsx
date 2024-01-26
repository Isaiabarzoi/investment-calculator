import "./UserInput.css";
import Input from "./Input";

const UserInput = ({ inputData, onChangeInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label={"Initial Investment"}
          type={"number"}
          required
          name={"initialInvestment"}
          value={inputData.initialInvestment.toString()}
          onChange={(e) => onChangeInput(e)}
        />
        <Input
          label={"Annual Investment"}
          type={"number"}
          required
          name={"annualInvestment"}
          value={inputData.annualInvestment.toString()}
          onChange={(e) => onChangeInput(e)}
        />
        <Input
          label={"Expected Return"}
          type={"number"}
          required
          name={"expectedReturn"}
          value={inputData.expectedReturn.toString()}
          onChange={(e) => onChangeInput(e)}
        />
        <Input
          label={"Duration"}
          type={"number"}
          required
          name={"duration"}
          value={inputData.duration.toString()}
          onChange={(e) => onChangeInput(e)}
        />
      </div>
    </section>
  );
};

export default UserInput;
