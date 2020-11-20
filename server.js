const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to code analyzer application." });
});


const PORT = process.env.PORT || 8080;
var server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});