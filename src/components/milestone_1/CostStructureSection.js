import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './CostStructureSection.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const CostStructureSection = () => {
  const data = {
    labels: ['Cloud Services', 'Data Organization', 'Promotional Costs'],
    datasets: [
      {
        data: [33.3, 33.3, 33.3], // Equal distribution for each cost
        backgroundColor: ['#1e90ff', '#87ceeb', '#4682b4'],
        hoverBackgroundColor: ['#1c86ee', '#6ca6cd', '#36648b'],
      },
    ],
  };

  const options = {
    cutout: '70%', // Creates a donut shape by cutting out the center
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#2c3e50',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="cost-structure-section">
      <h2>7. Cost Structure</h2>
      <div style={{ width: '200px', margin: '0 auto' }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default CostStructureSection;
