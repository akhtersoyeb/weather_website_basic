const express = require("express");
const app = express();
app.use(express.static("public"));
port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening at port ${3000}`);
});