// Visitor Counter
fetch("/.netlify/functions/visitorCount")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "visitor-count"
    ).innerText = `Besucher: ${data.count}`;
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
