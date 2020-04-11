import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(URL);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
    
  } catch (error) {}
  
};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${URL}/daily`)
        const modifiedDailyData = data.map(item => ({
            confirmed: item.confirmed.total,
            deaths: item.deaths.total,
            date: item.reportDate,
        }))

        return modifiedDailyData
    } catch (error) {
        
    }
}
