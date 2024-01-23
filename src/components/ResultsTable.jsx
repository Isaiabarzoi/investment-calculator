import "./ResultsTable.css";
import { calculateInvestmentResults, formatter } from "../util/investment";

const ResultsTable = ({ inputData }) => {
  const investmentsData = calculateInvestmentResults(inputData);
  console.log(investmentsData);

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
        {investmentsData.map((investment) => (
          <tr key={investment.year}>
            <td>{investment.year}</td>
            <td>{formatter.format(investment.valueEndOfYear)}</td>
            <td>{formatter.format(investment.interest)}</td>
            <td>{formatter.format(investment.interest)}</td>
            <td>
              {formatter.format(
                investment.valueEndOfYear - investment.interest
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
