const express = require('express');
const app = express();
const fs = require('fs');
const axios = require("axios");

const filename = "test.txt"

let path = "/my-volume-mount";
app.use(path, express.static(path));

try {
    fs.writeFileSync(`${path}/${filename}`, "The ingress container created this file.");
} catch (err) {
    console.error(err);
}

app.get('/', async (req, res) => {

    let response = await axios.get("http://localhost:5000");

    res.send("The sidecar says: " + response.data);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`Ingress container listening on port ${port}`);
});
