const express = require("express");
const app = express();


//app.use(express.json());

app.get("/", (req, res) =>{
    console.log("calling end point");
    res.send("Server working " + port);
});


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});