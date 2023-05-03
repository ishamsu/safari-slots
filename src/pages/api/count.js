import axios from "axios";

axios.defaults.headers.post["Content-Type"] =
"application/x-www-form-urlencoded";

export default async function handler(req, res) {
  const { body: payload } = req;

  try {
    const response = await axios.post(
      `https://tickets.nagaraholetigerreserve.com/getSafariAvailability/3`,
      payload, {
      headers: {
        "Content-Type": "application/json",
      },
    }
    );

    // res.setHeader("Access-Control-Allow-Origin", "*"); // Set the Access-Control-Allow-Origin header
    const jsonData = await response;
console.log('jsonData', jsonData.data)
    res.status(200).json(jsonData.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
