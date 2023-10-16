require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Successfully connected to the database");
});

// Basic route for the root
app.get('/', (req, res) => {
    res.send('Online Market Application API');
});

// Import routes
const productRoutes = require('./routes/product.routes');

// Use routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
