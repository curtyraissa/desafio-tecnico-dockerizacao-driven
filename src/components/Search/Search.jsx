import React, { useState } from "react";
import { StyledSearch, Input, Button } from "./SearchStyles";
import axios from "axios";
import { Overview } from "../Overview/Overview";
import { translateWeatherCondition } from "../../util/translateWeatherCondition";
import { Graphic } from "../Graphic/Graphic";

export const Search = () => {
  const [city, setCity] = useState(""); // Estado para armazenar a cidade digitada
  const [weatherData, setweatherData] = useState(null); // Estado para armazenar os dados da cidade na rota weather
  const [forecastData, setForecastData] = useState(null); // Estado para armazenar os dados da cidade na rota forecast

  const apiKey = "8d0416a7768b0006840da31e0af379a9";

  const handleSearch = async () => { //chamar essa funcao ao clicar no button
    try {
      if (!city) {
        return; // Não faz nada se 'city' não estiver definida
      }

      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        ),
      ]);

      setweatherData(weatherResponse.data); 

      const chartData = forecastResponse.data.list.map(
        ({ main: { temp }, dt_txt }) => {
          const date = new Date(dt_txt);
          return {
            temp,
            date: `${date.getDate()}/${date.getMonth() + 1}`, // Formatar data
          };
        }
      );
      setForecastData(chartData);

    } catch (error) {
      if (error.response) {
        // Erro de resposta da API (por exemplo: erro 404)
        alert("Erro na resposta da API");
      } else if (error.request) {
        // Erro na requisição para a API (por exemplo: falha de rede)
        alert("Erro na requisição para a API");
      } else {
        // Erro desconhecido
        alert("Erro desconhecido");
      }
    }
  };

  return (
    <>
      <StyledSearch>
        <Input
          type="text"
          placeholder="Digite o nome da cidade"
          value={city} // valor inicial de city que é ""
          onChange={(e) => setCity(e.target.value)} // armazena o valor digitado e atribui a setCity
        />
        <Button onClick={handleSearch}>Buscar</Button>
      </StyledSearch>

      {weatherData && ( // renderiza Overview se for verdadeiro
        <Overview
          cityName={weatherData?.name}
          weatherCondition={translateWeatherCondition(
            weatherData?.weather[0]?.main
          )}
          minTemperature={weatherData?.main?.temp_min.toFixed(1) + "°C"}
          maxTemperature={weatherData?.main?.temp_max.toFixed(1) + "°C"}
          currentTemperature={weatherData?.main?.temp.toFixed(1) + "°C"}
        />
      )}

      {/* renderiza Graphic se for verdadeiro */}
      {forecastData && <Graphic data={forecastData} />} 
    </>
  );
};
