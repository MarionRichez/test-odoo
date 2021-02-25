// Test 6: Any language (1/20)
// Write a program to download the contents of https://www.sap.com/belgique/index.html (the SAP homepage for Belgium), and then save the contents of the page to a new local file, with all occurrences of "SAP" replaced by "Odoo".

const https = require("https");
const fs = require("fs");
const url = "https://www.sap.com/belgique/index.html";

https.get(url, (res) => {
  let result = "";
  res.on("data", (chunk) => {
    result += chunk;
  });

  res.on("error", (err) => {
    console.log(err);
  });

  res.on("end", () => {
    const newContent = result.replace(/SAP/g, "Odoo");
    fs.writeFile("Odoo.html", newContent, (err) => {
      if (err) return console.log(`Something is wrong : ${err}`);
      console.log("Check this file");
    });
  });
});
