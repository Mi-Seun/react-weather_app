import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
// import { Search } from "../components/Search";
import { MetricsBox } from "../components/MetricsBox";
import { UnitSwitch } from "../components/UnitSwitch";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";

import cityConfig from '../public/cityConfig.json';

import styles from "../styles/Home.module.css";

export const App = () => {
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    const getData = async () => {
      const { latitude, longitude } = cityConfig;
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=Europe/Paris`);
      const data = await res.json();
      setWeatherData(data.current_weather); // Open Meteo API에서 current_weather를 사용하여 데이터를 업데이트
    };
    getData();
  }, []);  // 최초 로딩 시 한 번만 실행

  const changeSystem = () => 
    unitSystem === "metric" ? setUnitSystem("imperial") : setUnitSystem("metric");

  return weatherData ? (
    <div className={styles.wrapper}>
      <MainCard
        city={cityConfig.city} // cityConfig에서 도시 이름을 가져옴
        description={weatherData.weathercode}  // 날씨 상태
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
        </Header>
        <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
        <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
      </ContentBox>
    </div>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;
