const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8000;
const app = express();

app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json()); 
app.listen(PORT, () => console.log("listening on port " + PORT))
require("./backend/routes")(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});