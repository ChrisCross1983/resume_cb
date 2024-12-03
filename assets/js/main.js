// Visitor Counter
fetch("/.netlify/functions/visitorCount")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "visitor-count"
    ).innerText = `Besucher: ${data.count}`;
  });

// Event Listener for CV-Download
document.getElementById("cv-download").addEventListener("click", function () {
  fetch("/.netlify/functions/trackDownload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ timestamp: new Date().toISOString() }),
  });
});
