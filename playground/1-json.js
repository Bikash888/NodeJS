const fs = require("fs");
const readInfo = fs.readFileSync("book.json");
const infoData = readInfo.toString();
const user = JSON.parse(infoData);
user.name = "Bikash";
user.age = "20";
const userData = JSON.stringify(user);
fs.writeFileSync("book.json", userData);