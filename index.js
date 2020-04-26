const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    let weight = Number(req.body.weight) * 703;
    let height = Number(req.body.height);

    let result = weight / (height * height);

        res.send("Your BMI is: " + Math.floor(result));
});

app.listen(3000);