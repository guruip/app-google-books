const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(_dirname + "/dist/"));

app.get("/*", function(rec, res) {
    res.sendFile(path.join(_dirname + "/dist/index.html"));
});

app.listen(process.env.POST || 4200);
