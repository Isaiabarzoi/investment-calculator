import "./ResultsTable.css";
import { calculateInvestmentResults, formatter } from "../util/investment";

const ResultsTable = ({ inputData }) => {
  const investmentsData = calculateInvestmentResults(inputData);

  const initialInvestment =
    investmentsData[0].valueEndOfYear -
    investmentsData[0].interest -
    investmentsData[0].annualInvestment;

  console.log(initialInvestment);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentsData.map((investment) => {
          const totalInterest =
            investment.valueEndOfYear -
            investment.annualInvestment * investment.year -
            initialInvestment;

          const totalAmount = investment.valueEndOfYear - totalInterest;

          return (
            <tr key={investment.year}>
              <td>{investment.year}</td>
              <td>{formatter.format(investment.valueEndOfYear)}</td>
              <td>{formatter.format(investment.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
