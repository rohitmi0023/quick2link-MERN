const express = require('express');

const connectDB = require('./config/db');

const app = express();

//Connecting to database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//App routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/social', require('./routes/api/social'));
// app.use('/api/music', require('./routes/api/music'));
// app.use('/api/sports', require('./routes/api/sports'));
// app.use('/api/movies', require('./routes/api/movies'));

app.get('/', (req, res) => res.send(`API started..`));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
