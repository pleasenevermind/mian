const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const Cors = require("cors");
const path = require("path");
const dataRouter = require("./routes/dataRoute.js");
const galleryRouter = require("./routes/galleryRoute.js");
const blogRouter = require("./routes/blogRoute.js");
const serviceRouter = require("./routes/servicesRoute.js");
const userRoute = require("./routes/userRoute.js")
const visitsRouter = require("./routes/visitsTrackerRote.js")
const app = express();
app.use(Cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
env.config();
console.log(__dirname)
// Serve the React app's static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Any other route will serve the React app's HTML file

app.use(express.json());
app.use("/api/listings", dataRouter);
app.use("/api/gallery", galleryRouter);
app.use("/api/blog", blogRouter);
app.use("/api/requests", serviceRouter);
app.use("/api/admin/user", userRoute);
app.use("/api/admin/visits", visitsRouter);
app.use("/uploads", express.static("uploads"));
app.use("/uploadImage", require('./routes/imageUpload.js'))
app.use("/offers", require('./routes/offers.js'))
mongoose.connect(process.env.DB).then(
    app.listen(process.env.PORT, () => {
        console.log("Connect to Port ", process.env.PORT);
    }),
).catch(e => console.log("Error Occured : ", e));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});