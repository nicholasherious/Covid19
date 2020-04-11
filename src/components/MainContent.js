import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../api/Api';

function MainContent() {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const dailyDataFetcher = async () => {
      setDailyData(await fetchDailyData());
    };
    dailyDataFetcher();
  }, []);

  const lineChart = (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5',
            fill: true,
          },
        ],
      }}
    />
  );

  console.log(dailyData);

  return <div>{lineChart}</div>;
}

export default MainContent;
