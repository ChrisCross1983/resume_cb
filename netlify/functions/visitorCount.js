const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyKRoP8YkCnV5LwwOOqbMqbHWtmGmAVPQuY96gx9U8xdf2P3WPc1zVczCg7_UN2m48V/exec"
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
