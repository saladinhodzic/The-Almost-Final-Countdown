import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results({ values }) {
  const yearData = calculateInvestmentResults(values);
  const initialInvestment =
    yearData[0].valueEndOfYear -
    yearData[0].interest -
    yearData[0].annualInvestment;
  console.log(yearData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearData.map((year) => {
          const totalInterest =
            year.valueEndOfYear -
            year.annualInvestment * year.year -
            initialInvestment;

          const totalAmountInvested = year.valueEndOfYear - year.interest;
          return (
            <tr key={year.year}>
              <td>{year.year}</td>
              <td>{formatter.format(year.valueEndOfYear)}</td>
              <td>{formatter.format(year.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
