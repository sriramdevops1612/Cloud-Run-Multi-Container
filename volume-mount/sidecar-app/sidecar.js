const express = require('express');
const app = express();
const fs = require('fs');

const filename = "test.txt"

let path = "/my-volume-mount";
app.use(path, express.static(path));

async function readFile() {
    try {
        return await fs.readFileSync(`${path}/${filename}`, { encoding: 'utf8' });
    } catch (err) {
        console.log(err);
    }
}

app.get('/', async (req, res) => {
    let contents = await readFile();
    res.send(contents);
});

const port = parseInt(process.env.PORT || 5000);
app.listen(port, () => {
    console.log(`Sidecar container listening on port ${port}`);
});
