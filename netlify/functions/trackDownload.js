const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    const timestamp = new Date().toISOString();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzKPsOYgnOaSCx2ZWMG8k-kTS0i6LbBRo1iMhmJlgE/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "downloadTracking", timestamp }),
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
          error: "Fehler beim Senden der Daten an das Google Sheet",
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
