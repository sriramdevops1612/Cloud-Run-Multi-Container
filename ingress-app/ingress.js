const express = require('express');
const app = express();
const axios = require("axios");

app.get('/', async (req, res) => {

    let response = await axios.get("http://localhost:5000");

    res.send("The sidecar says: " + response.data);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`Ingress container listening on port ${port}`);
});
