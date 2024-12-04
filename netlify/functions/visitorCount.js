const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/YOUR_WEB_APP_ID/exec"
    );

    const responseBody = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(responseBody),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Fehler beim Abrufen des Besucherzählers",
        details: error.message,
      }),
    };
  }
};
