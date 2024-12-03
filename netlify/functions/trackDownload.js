const fetch = require("node-fetch"); // Importiere die node-fetch Bibliothek

exports.handler = async (event, context) => {
  // Prüfe, ob die Anfrage eine POST-Anfrage ist
  if (event.httpMethod === "POST") {
    const timestamp = new Date().toISOString(); // Erstelle einen Zeitstempel

    try {
      // Führe die fetch-Anfrage an die Google Web-App aus
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyKRoP8YkCnV5LwwOOqbMqbHWtmGmAVPQuY96gx9U8xdf2P3WPc1zVczCg7_UN2m48V/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ timestamp }), // Sende den Zeitstempel als JSON
        }
      );

      // Lese die Antwort von der Web-App
      const responseBody = await response.text();

      // Rückgabe bei erfolgreicher Anfrage
      return {
        statusCode: 200,
        body: responseBody,
      };
    } catch (error) {
      // Fehlerbehandlung und Protokollierung
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Fehler beim Senden der Daten an das Google Sheet",
          details: error.message,
        }),
      };
    }
  } else {
    // Rückgabe, wenn die Methode nicht POST ist
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }
};
