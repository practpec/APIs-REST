const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(bodyParser.json());


const detallesRouter = require('./src/routes/detalles.route');
require('./src/configs/db.config');
app.use('/detalles', detallesRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("API en el puerto " + PORT);
});