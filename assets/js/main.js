document.addEventListener("DOMContentLoaded", function () {
  const downloadLinks = document.querySelectorAll(".cv-pdf");

  downloadLinks.forEach(link => {
    link.addEventListener("click", async function () {
      // Track the download event
      try {
        const response = await fetch("/.netlify/functions/trackDownload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "downloadTracking",
            timestamp: new Date().toISOString()
          })
        });

        const data = await response.json();
        console.log("Download tracked:", data);
      } catch (error) {
        console.error("Fehler beim Tracking des Downloads:", error);
      }
    });
  });
});
