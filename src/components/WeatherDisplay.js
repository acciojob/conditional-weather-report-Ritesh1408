import React from 'react'

const WeatherDisplay = ({ weather }) => {
    const tempColor = weather.temperature > 20 ? 'red' : 'blue';
  return (
    <div style={{border: '1px solid black', padding: '10px', margin: '10px', width: '200px'}}>
        <p>
            <span style={{color:tempColor}}>Temperature : {weather.temperature}</span>
        </p>
        <p>Conditions: {weather.conditions}</p>
    </div>
  )
}

export default WeatherDisplay;
