const express = require('express');
const app = express();
const path = require('path');
/*const dotenv = require('dotenv');
dotenv.config();*/


const PORT =3000;

app.set('view engine', 'ejs');

const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log("connected to the server...");
});

app.get('/', (req,res) => {
    res.render('index');
});
