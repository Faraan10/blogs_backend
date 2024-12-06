const NEWS_API_BASE_URL = process.env.NEWS_API_BASE_URL;
const API_KEY = process.env.API_KEY;
const axios = require("axios");

const getData = async (req, res) => {
  try {
    const newsData = await axios.get(NEWS_API_BASE_URL, {
      headers: { "X-Api-Key": API_KEY },
    });
    return res.status(200).json(newsData.data);
  } catch (err) {
    console.log("GetData Error", err);
    return res.status(500).json({ msg: "Failed to fetch data from API" });
  }
};

module.exports = { getData };
