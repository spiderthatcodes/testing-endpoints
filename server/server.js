const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/bookRoutes');
const cors = require('cors')

const port = process.env.PORT || 8000;

connectDB();

const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api', routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
