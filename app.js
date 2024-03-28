const express = require('express')
const dotenv = require('dotenv')
const routes = require("./routes");
const { Client } = require('pg');

dotenv.config();

const { PORT } = process.env
const port = PORT || 4001;
const app = express();
app.use(express.json());
app.use(routes);
const client = new Client({ user: 'postgres', host: 'localhost', database: 'FoodDelivery', password: 'Azlogics', port: 5432, });

const start = async () => {
    try {
        await client.connect().then(() => { console.log('Connected to PostgreSQL database!'); }).catch((err) => { console.error('Error connecting to the database:', err); });
    } catch (err) {
        console.error(err);
    } finally {
        app.listen(port, () => {
            console.log(`Server runnig on PORT ${port}`)
        })
    }
}

start();
module.exports = {client}



