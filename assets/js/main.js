document.querySelectorAll(".cv-pdf").forEach(link => {
  link.addEventListener("click", async () => {
    try {
      // Sende eine POST-Anfrage an die Netlify Function zum Tracken des Downloads
      const response = await fetch("/.netlify/functions/trackDownload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ timestamp: new Date().toISOString() })
      });

      const data = await response.json();
      console.log("Download tracked:", data);
    } catch (error) {
      console.error("Fehler beim Tracking des Downloads:", error);
    }
  });
});
