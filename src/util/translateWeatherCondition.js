// Função para traduzir as condições meteorológicas
export const translateWeatherCondition = (condition) => {
  switch (condition) {
    case "Clear":
      return "Céu aberto";
    case "Clouds":
      return "Nublado";
    case "Rain":
      return "Chovendo";
    case "Snow":
      return "Nevando";
    case "Thunderstorm":
      return "Tempestade";
    case "Drizzle":
      return "Chuviscando";
    case "Mist":
      return "Neblina";
    default:
      return condition;
  }
};
