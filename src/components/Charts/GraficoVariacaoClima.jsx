import React from 'react';
import { inverteStringParaDia } from '../../module/conversao';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, 
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'; 


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, 
  Title,
  Tooltip,
  Legend
);

const GraficoVariacaoClima = ({ temperaturaMax, temperaturaMin, dias }) => {
  const labels = dias.map(item => inverteStringParaDia(item));

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temperatura Máxima",
        data: temperaturaMax,
        borderColor: 'rgb(255, 99, 132)', 
        backgroundColor: 'rgba(255, 99, 132, 0.2)', 
        tension: 0.4, 
      },
      {
        label: "Temperatura Mínima",
        data: temperaturaMin,
        borderColor: 'rgb(54, 162, 235)', 
        backgroundColor: 'rgba(54, 162, 235, 0.2)', 
        tension: 0.4, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico de Temperaturas Máxima e Mínima',
      },
      
    },
  };
  return(
    <div style={{ width: '75%', height: '100%', margin: "6rem 0 0 0",  color: "#5c4033"}}>
      <Line data={data} options={options} width={undefined} height={undefined} marginTop={undefined} color={undefined}/>
    </div>  
  )
  
};

export default GraficoVariacaoClima;
