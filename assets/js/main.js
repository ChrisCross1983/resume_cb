// Visitor Counter
document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("/.netlify/functions/visitorCount");
    const data = await response.json();
    document.getElementById(
      "visitor-count"
    ).textContent = `Besucher: ${data.count}`;
  } catch (error) {
    console.error("Fehler beim Abrufen des Besucherzählers:", error);
  }
});

// Event Listener for CV-Download
document.addEventListener("DOMContentLoaded", function () {
  const downloadLinks = document.querySelectorAll(
    '[data-bs-target="#cvDownloadModal"]'
  );

  downloadLinks.forEach((link) => {
    link.addEventListener("click", function () {
      fetch("/.netlify/functions/trackDownload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ timestamp: new Date().toISOString() }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Download tracked:", data);
        })
        .catch((error) => {
          console.error("Error tracking download:", error);
        });
    });
  });
});
