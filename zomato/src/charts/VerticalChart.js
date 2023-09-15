import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const handleHourTrendClick = async (event, chartElements) => {
  if (chartElements.length > 0) {
    
    const filterData = chartElements[0].index
    const datasetIndex=chartElements[0].datasetIndex;
    const datasetLabel = data.datasets[datasetIndex].label;
    console.log(datasetLabel,"label");
    const dataValue = data.datasets[datasetIndex].data[filterData];


    alert(`${datasetLabel}: ${dataValue}`);
  }

}

export const options = {
  onClick: handleHourTrendClick,
    onHover: (e, chartElement) => {
      if (chartElement.length === 1) {
        e.native.target.style.cursor = 'pointer'
      }
      else {
        e.native.target.style.cursor = null
      }
    },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels:{
         PointStyle:'star',
         usePointStyle:true,
        // useBorderRadius:false,
        // borderRadius:50,
        // boxWidth:10,
        // boxHeight:10
      }
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  elements:{
    point:{
        PointStyle:'crossRot'
    }
  },
  events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']
  
};

const Data = [
    {
        id: 1, year: 2016, userGain: 45000, userLost: 8236
    },
    {
        id: 2, year: 2017, userGain: 45677, userLost: 3454
    },
    {
        id: 3, year: 2018, userGain: 32000, userLost: 5555
    },
    {
        id: 4, year: 2019, userGain: 40000, userLost: 45556
    },
    {
        id: 5, year: 2020, userGain: 23000, userLost: 2341
    },
    {
        id: 6, year: 2019, userGain: 40000, userLost: 45555
    },
    {
        id: 7, year: 2020, userGain: 23000, userLost: 2341
    },
    {
        id: 8, year: 2018, userGain: 32000, userLost: 5551
    },
    {
        id: 9, year: 2019, userGain: 40000, userLost: 45551
    },
    {
        id: 10, year: 2020, userGain: 23000, userLost: 2344
    },
    {
        id: 11, year: 2019, userGain: 40000, userLost: 10000
    },
    {
        id: 12, year: 2020, userGain: 23000, userLost: 2345
    },

];

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];





export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Data.map((info)=>(info.userGain)),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: Data.map((info)=>(info.userLost)),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



const VerticalChart=()=> {
  const handleChartClick = (elements) => {
    if (elements && elements.length > 0) {
      const datasetIndex = elements[0].datasetIndex;
      const dataIndex = elements[0].index;
      const datasetLabel = data.datasets[datasetIndex].label;
      const dataValue = data.datasets[datasetIndex].data[dataIndex];

      // You can customize the alert message as per your needs
      alert(`${datasetLabel}: ${dataValue}`);
    }
  };

  return (
  <div>
  <Bar options={options} onElementsClick={handleChartClick}  data={data} />
  </div>
  )
}

export default VerticalChart
