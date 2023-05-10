const express = require("express");
const path = require('path');
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/api/data", (req, res) => {
    const data = req.body;
    console.log(data);

    let reviewsJSON = fs.readFileSync("./client/src/components/NewReview/reviews.json", (err) => {
        if (err) {
        console.log(err);
        } else {
        console.log("Data saved!");
        }
    });

    let reviews = JSON.parse(reviewsJSON);

    reviews.push(data);

    reviewsJSON = JSON.stringify(reviews);

    fs.writeFileSync("./client/src/components/NewReview/reviews.json", reviewsJSON, (err) => {
        if (err) {
        console.log(err);
        } else {
        console.log("Data saved!");
        }
    });

    console.log('all good!');

    res.json({ message: "Data received" });
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});