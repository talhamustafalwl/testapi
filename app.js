const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
// const cors = require('cors');
const routes = require("./routes");

mongoose.set('useCreateIndex', true);
//mongoose
const connect = mongoose
    .connect('mongodb+srv://ams:AMS1234@ams.zlik0.mongodb.net/ams'
      , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));
///


Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

// app.use(cors());
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



//for image,qrcode,videos
app.use("/api/uploads", express.static("uploads"));

//routes
app.use((req, res,next) => {
    console.log(req.originalUrl)
    next();
})

// app.use("/api/users", require("./routes/users"));
app.use('/api', routes);


app.use((error, req, res, next) => {
    console.log('Error is  ======== ', error);
    res.status(400).json({ status: 400, message: 'Internal Server Error' });
});

app.use((req, res, next) => {
    const err = new Error('Resource does not exist');
    console.log(req.originalUrl)
    res.status(404).json({ status: 404, message: 'Resource Not Found' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server Running at ${port}`);
});