const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const connectDB = require('./server/database/connection');


//const { MONGO_URI } = require('./config');
//const postsRoutes = require('./routes/api/posts_controller')

const app = express();

dotenv.config({path : 'config.env'})
const PORT = process.env.PORT || 8080;

//log
app.use(morgan('tiny'));

//mongodb connection
connectDB();

app.use(bodyParser.urlencoded({
    extended: true
  }));

//set view
app.set("view engine", "ejs")

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));