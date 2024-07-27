import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Result({values}) {
    const calculatedValues = calculateInvestmentResults(values);
    const {initialInvestment} = values;
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
                {calculatedValues.map((value, index) => {
                    let totalInterest = 0;
                    let investedCapital = initialInvestment;

                    for(let i = 0; i <= index; i++ ) {
                        totalInterest += calculatedValues[i].interest;
                        investedCapital += calculatedValues[i].annualInvestment;
                    }

                    return (
                        <tr key={value.year}>
                            <td>{value.year}</td>
                            <td>{formatter.format(value.valueEndOfYear)}</td>
                            <td>{formatter.format(value.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>)
                    
                })}
            </tbody>
        </table>
    )
}