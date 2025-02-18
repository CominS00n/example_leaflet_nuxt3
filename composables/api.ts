import axios from "axios";
import type { AirQualityResponse } from "../types/responseInterface";

axios.defaults.baseURL = "https://api.waqi.info/";

export class AirQuality {
  public async getAirQuality() {
    const response = await axios({
      method: "GET",
      url: "search/",
      params: {
        token: "817f0d85bda78d97dc1f96024e5363cb2606eef1",
        keyword: "thailand",
      },
    });
    return response.data as AirQualityResponse;
  }
}
