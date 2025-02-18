export interface AirQualityResponse {
  status: string;
  data: dataAirQuality[];
}

export interface dataAirQuality {
  uuid: number;
  aqi: string;
  time: timeAirQuality;
  station: stationAirQuality;
}

interface timeAirQuality {
  tz: string;
  stime: string;
  vtime: string;
}

interface stationAirQuality {
  name: string;
  geo: [number, number];
  url: string;
}
