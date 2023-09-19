import styled from "styled-components";

const weatherColors = {
  "Céu aberto": "#FBE8A4",
  Nublado: "#BFC1C3",
  Chovendo: "#6A9EDA",
  Nevando: "#EDEDED",
  Neblina: "#EDEDED",
  Tempestade: "#C4BDF3",
  Chuviscando: "#A4E1E9",
  default: "#E2504c",
};

export const StyledOverview = styled.div`
  background-color: ${(props) => {
    const color =
      weatherColors[props.weatherCondition] || weatherColors.default;
    return color;
  }};

  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px 0;
  padding: 20px;
  color: black;
`;

export const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const StyledTemperatures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
`;

export const StyledCurrentTemperature = styled.div`
  font-size: 32px;
`;
