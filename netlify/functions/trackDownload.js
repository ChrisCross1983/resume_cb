const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    const timestamp = new Date().toISOString();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyKRoP8YkCnV5LwwOOqbMqbHWtmGmAVPQuY96gx9U8xdf2P3WPc1zVczCg7_UN2m48V/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ timestamp }),
        }
      );

      const responseBody = await response.text();
      return {
        statusCode: 200,
        body: responseBody,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Error while sending data to Google Sheet",
          details: error.message,
        }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }
};
