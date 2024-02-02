const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    res.send("Hello ingress container! I'm the sidecar.");
});

const port = parseInt(process.env.PORT || 5000);
app.listen(port, () => {
    console.log(`Sidecar container listening on port ${port}`);
});
