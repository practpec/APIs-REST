const express = require('express');
const app = express();
require('dotenv').config();
require('./src/configs/db.config');
const PORT = process.env.PORT;
const detallesRouter = require('./src/routes/detalles.route');


app.use(express.json());
app.use('/detalles', detallesRouter); 
app.listen(PORT, () => {
    console.log("API escuchando en el puerto " + PORT);
});