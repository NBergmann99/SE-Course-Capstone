const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { render } = require('ejs');
const drawingRoutes = require('./routes/drawingRoutes');
const authRoutes = require('./routes/authRoutes')
const { requireAuth } = require('./middleware/requireAuth');
const { checkUser } = require('./middleware/checkUser');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;


//express app
const app = express();

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })) //for accepting form data
app.use(express.json());
app.use(cookieParser());

//connect to mongodb
const dbURI = MONGO_URI;
mongoose.connect(dbURI)
    .then((result) => app.listen(PORT, () => {//listen for requests, also starts an instance of the server. Fires whichever code matches first.
    console.log(`Listening to requests on port ${ PORT }`)}))
    .catch((err) => console.log(err));


//register view engine
app.set('view engine', 'ejs');

//routes

app.get('{/*path}', checkUser);//always checking is user is present/logged in
app.get('/', (req, res) => res.render('home'));//this view is pre-login
app.get('/drawings', requireAuth);//this is rendering a view of the protected drawings route
app.get('/about', (req, res) => {
    res.render('about', { title : 'About' });
});
app.use(drawingRoutes);
app.use(authRoutes)//primary route handling function. I guess if I combine routes into one file, I would just reference to use one file instead of calling app.use('/drawings', drawingRoutes);

//404 page- .use is going to file regardless, so it's important to put this last
app.use((req, res) => {
    res.status(404).render('404', { title : 'Home' })
})