import axios from "axios";
const BASE_URL =
  "https://api-open.data.gov.sg/v2/real-time/api/twenty-four-hr-forecast";
const govWeatherAPI = axios.create({ baseURL: BASE_URL });

export default govWeatherAPI;
