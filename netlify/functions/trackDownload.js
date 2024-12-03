const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "downloads.json");

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    const timestamp = new Date().toISOString();
    let downloads = [];

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath);
      downloads = JSON.parse(data);
    }

    downloads.push({ timestamp });

    fs.writeFileSync(filePath, JSON.stringify(downloads, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Download tracked", timestamp }),
    };
  } else {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }
};
