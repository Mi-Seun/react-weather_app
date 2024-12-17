import Image from "next/image";
import { ctoF } from "../services/converters";
import styles from "./MainCard.module.css";

export const MainCard = ({
  city,
  description,
  iconName,
  unitSystem,
  weatherData,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}
      </h1>
      <p className={styles.description}>{description}</p>
      <Image
        width="300"
        height="300"
        src={`/icons/${iconName}.svg`}
        alt="weatherIcon"
      />

{/*
	<h1 className={styles.temperature}>
	{unitSystem == "metric"
	? Math.round(weatherData.main.temp)
	: Math.round(ctoF(weatherData.main.temp))}
	°{unitSystem == "metric" ? "C" : "F"}
	</h1>
 */}
      <h1 className={styles.temperature}>
        {unitSystem === "metric"
          ? Math.round(weatherData.temperature)
          : Math.round(ctoF(weatherData.temperature))}
        °{unitSystem === "metric" ? "C" : "F"}
      </h1>
      <p>
        Feels like{" "}
        {unitSystem === "metric"
          ? Math.round(weatherData.feels_like)
          : Math.round(ctoF(weatherData.feels_like))}
        °{unitSystem === "metric" ? "C" : "F"}
      </p>
    </div>
  );
};
