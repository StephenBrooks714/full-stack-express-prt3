const express = require("express");
const app = express();

require("dotenv").config();

app.set("view engine", "ejs");

const port = process.env.PORT;
app.listen(port || 8000, () => {
    console.log(`App is listening on port ${port}`)
});