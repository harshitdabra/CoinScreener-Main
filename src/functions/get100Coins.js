import axios from "axios";
import axiosRetry from "axios-retry";

// Add retry functionality to axios
axiosRetry(axios, {
  retries: 3, // number of retry attempts
  retryDelay: (retryCount) => {
    console.log(`Retry attempt: ${retryCount}`);
    return retryCount * 1000; // Exponential backoff: wait 1 second, then 2 seconds, then 3...
  },
  retryCondition: (error) => {
    // Retry only if the error status is 429 (Too Many Requests)
    return error.response && error.response.status === 429;
  },
});

export const get100Coins = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      }
    );
    console.log("RESPONSE>>>", response.data);
    return response.data;
  } catch (error) {
    console.log("ERROR>>>", error.message);
  }
};
