const express = require('express');
const mongoose = require('mongoose');
const app = express();
console.log("Hello Ravi Prasad !!!!!");
const router = require("./routes/resume-routes");
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use("/resumes", router);


/*app.use("/", (req, res, next) => {
    res.send("Hi Ravi  5000!!!!!!!!!!!!!!");
});*/




mongoose
    .connect(
        'mongodb+srv://admin:6hY9m6Y2J8HR20Qb@cluster0.zikgrcg.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => console.log("you are connect to database!!!!"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));
//6hY9m6Y2J8HR20Qb
//Yv5xjIWRSCSdEZZd

//https://github.com/raviattrash-pro/Resume_Builder.git