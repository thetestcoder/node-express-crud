const express = require('express');
const app = express();
require('dotenv').config()

// MIDDLEWARES
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// SETTINGS
app.set('view engine', 'ejs');
app.set('views', './views');

// ROUTES
require('./routes')(app)


// BOOTSTRAP APPLICATION WITH DB CONNECTION
const connectDB = require('./db/connect')
const startApp = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT || 3000);
        console.log("Application is running")
    }catch (e) {
        console.log(e)
    }
}

startApp();

