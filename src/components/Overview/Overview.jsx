import React from "react";
import {
  StyledOverview,
  StyledTop,
  StyledBottom,
  StyledTemperatures,
  StyledCurrentTemperature,
} from "./OverviewStyles";

export const Overview = ({
  cityName,
  weatherCondition,
  minTemperature,
  maxTemperature,
  currentTemperature,
}) => {

  return (
    <StyledOverview weatherCondition={weatherCondition}>
      <StyledTop>
        <p>Agora: {cityName}</p>
        <p>{weatherCondition}</p>
      </StyledTop>
      <StyledBottom>
        <StyledTemperatures>
          <p>Mínima: {minTemperature}</p>
          <p>Máxima: {maxTemperature}</p>
        </StyledTemperatures>
        <StyledCurrentTemperature>
          {currentTemperature}
        </StyledCurrentTemperature>
      </StyledBottom>
    </StyledOverview>
  );
};
