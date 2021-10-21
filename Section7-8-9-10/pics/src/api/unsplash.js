import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID k_H_587UN1PvBw4Y8F354q4bRUcv_7Nn2EudvDKWyr0",
  },
});
