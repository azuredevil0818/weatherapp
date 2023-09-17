import React, { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { getWeather, getWeatherByCity } from '@api/weatherApi';
import useCustomTheme from '@hooks/useTheme';
import useGeolocation from '@hooks/useGeolocation';
import WeatherCard from '@components/WeatherCard';
import SearchBar from '@components/SearchBar';
import Details from '@components/Details';

import * as S from './global.styles';

function App() {
  const { theme, handleTheme } = useCustomTheme();
  const { handleGeolocation } = useGeolocation();

  const queryClient = useQueryClient();

  const { data: response, isLoading } = useQuery({
    queryKey: 'weather',
    queryFn: async () => {
      return getWeather(await handleGeolocation());
    },
  });
  const { mutate, isLoading: mutateLoading } = useMutation({
    mutationFn: getWeatherByCity,
    onSuccess: (mutationData) => {
      queryClient.setQueryData('weather', mutationData);
    },
  });

  useEffect(() => {
    handleTheme(response?.data.main.temp);
  }, [response, handleTheme]);

  console.log(response?.data);

  return (
    <ThemeProvider theme={theme}>
      <S.AppWrapper>
        <SearchBar handleSearch={mutate} />

        <WeatherCard
          data={response?.data}
          isLoading={isLoading || mutateLoading}
        />

        <Details data={response?.data} />
      </S.AppWrapper>
    </ThemeProvider>
  );
}

export default App;
