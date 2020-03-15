const express = require('express');
const app = express();

// Setup the path
app.get("/", (req, res) => {
    res.send("Hello World!");
})

// Check the environmental variable port, if it exist, use it. Otherwise, use 5000 
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})