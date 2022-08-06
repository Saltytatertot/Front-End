import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import 'weather-icons-react';
import { useEffect } from 'react';


const theme = createTheme({
  palette:{
    primary: {
      main: '#666666',
      contrastText: ''
    },
    secondary: {
      light: '#444ce8',
      main: '#757444',
    },
  },
});

const getWeather = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/weather`).then((res) => {
      if (res.ok) {
        res.json().then(text => {
          fetchedData(text);
        }).catch(err => {
          console.log('Error when reading weather response text: ', err);
        });
        return;
      }

      return res.text().then(text => { throw new Error(text) });
    })
    .catch (err => {
      console.log('Error when fecthing weather data: ', err);
    });

  }


async function fetchedData  (apiData) {
  console.log(apiData);
  document.getElementById('temp').innerText = `${apiData.temperatureF}°F`;
  document.getElementById('cond').innerText = `${apiData.condition}`;
  document.getElementById('time_now').innerText = `${apiData.time}`;
}

const Weather = () => {
  useEffect(() => {
    getWeather();
  });
  return (
    
    <ThemeProvider theme={theme}>
      <Container className="header">
        <ul className="list-group list-group-horizontal">
        <li className='d-inline p-1'>
            <p>Time:</p>
          </li>
          <li className='d-inline p-1'>
            <p id="time_now">Unknown</p>
          </li>
          <li className='d-inline p-1'>
            <p>Weather:</p>
          </li>
          <li className='d-inline p-1'>
            <p id="cond">Unkown</p>
          </li>
          <li className='d-inline p-1'>
            <p id ="temp">Unknown</p>
          </li>
        </ul>
          
        {/* <b><p><u>{weatherData.name} Weather </u></p> */}
        {/* ICON HERE */}
        {/* <p>{weatherData.temp} &#176; F</p> */}
        {/* <p>{weatherData.weather[0].description.toUpperCase()}</p>
        <p>Wind Speed: {(weatherData.wind.speed).toFixed(2)} mph</p>
        <p>sunrise: {convertDatetime(weatherData.sys.sunrise)}</p>
        <p>sunset: {convertDatetime(weatherData.sys.sunset)}</p> */}
        {/* </b> */}
      </Container>
    </ThemeProvider>
  );
};
  
export default Weather;