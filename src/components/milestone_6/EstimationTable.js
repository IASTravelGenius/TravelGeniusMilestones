import React from 'react';

const EstimationTable = () => (
    <div className="table-container">
        <table className="estimation-table">
            <thead>
            <tr>
                <th>Year</th>
                <th>Market Share</th>
                <th>Users</th>
                <th>3-month plan</th>
                <th>6-month plan</th>
                <th>1-year plan</th>
                <th>Total Revenue</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="center">1</td>
                <td className="center">0.0005%</td>
                <td className="center">100,000</td>
                <td className="center">3,000</td>
                <td className="center">1,500</td>
                <td className="center">500</td>
                <td className="center">27,000$</td>
            </tr>
            <tr>
                <td className="center">2</td>
                <td className="center">0.0025%</td>
                <td className="center">500,000</td>
                <td className="center">14,000</td>
                <td className="center">7,500</td>
                <td className="center">2,500</td>
                <td className="center">160,000$</td>
            </tr>
            <tr>
                <td className="center">3</td>
                <td className="center">0.005%</td>
                <td className="center">1,000,000</td>
                <td className="center">28,000</td>
                <td className="center">15,000</td>
                <td className="center">5,000</td>
                <td className="center">320,000$</td>
            </tr>
            <tr>
                <td className="center">4</td>
                <td className="center">0.01%</td>
                <td className="center">2,000,000</td>
                <td className="center">56,000</td>
                <td className="center">30,000</td>
                <td className="center">10,000</td>
                <td className="center">640,000$</td>
            </tr>
            <tr>
                <td className="center">5</td>
                <td className="center">0.0175%</td>
                <td className="center">3,500,000</td>
                <td className="center">115,000</td>
                <td className="center">45,000</td>
                <td className="center">15,000</td>
                <td className="center">1,115,000$</td>
            </tr>
            </tbody>
        </table>
    </div>
);

export default EstimationTable;