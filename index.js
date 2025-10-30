console.log("App starting...");
var express = require("express");
var app = express();


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get("/", (req, res) => {
  res.send("Hello from Azure Node.js API!");
});
