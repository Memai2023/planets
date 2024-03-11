import express from "express";
import * as path from "path";
import marsRouter from './routes/mars.js';
import jupiterRouter from './routes/jupiter.js';
import zogorbiaRouter from './routes/zogorbia.js';

const app = express();
const port = process.env.PORT || 3060;
const __dirname = path.resolve();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
    if (!req.originalUrl.endsWith('/') && req.originalUrl !== '/') {
        res.redirect(301, req.originalUrl + '/');
    } else {
        next();
    }
});

app.get('/', (req, res) => {
    res.render('pages/home',
    {
        footer: "Assignment 2 by Maria Hendricks"
    })
})

app.use('/mars', marsRouter);
app.use('/jupiter', jupiterRouter);
app.use('/zogorbia', zogorbiaRouter);

app.listen(port, () => console.log(`Congratulations! You've come to the right place! now listening to ${port}`));