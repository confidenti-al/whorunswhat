require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');              // can comment out hbs later
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');
const session = require("express-session");
const passport = require("passport");

// const LocalStrategy = require("passport-local").Strategy;
// const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
// const flash = require("connect-flash");
const User         = require('./models/User');

require('./config/passport-stuff');

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`) // comment this out later
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
// app.use(require('node-sass-middleware')({
//   src:  path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   sourceMap: true
// }));      

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// app.use(flash());

// logo file
app.use(express.static(path.join(__dirname, 'public', 'images', 'logo.png')));

// default value for title local
app.locals.title = 'WhoRunsWhat - find out which tech stacks run at your favorite companies';

app.use(session({
  secret: "shhhhh-super-secret",
  cookie: { maxAge: 86400000 },
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

// const index = require('./routes/index');
// app.use('/', index);

const userRoutes = require('./routes/userRoutes');
app.use('/api/auth', userRoutes);

const companyRoutes = require('./routes/companyRoutes');
app.use('/api/companies', companyRoutes);

const technologyRoutes = require('./routes/technologyRoutes');
app.use('/api/technologies', technologyRoutes);


const root = path.join(__dirname, 'public/');
app.use(express.static(root));
app.use((req, res, next) => {
    if (
        req.method === 'GET' &&
        req.accepts('html') &&
        !req.is('json') &&
        !req.path.includes('.')
    ) {
        res.sendFile('index.html', { root });
    } else next();
});


module.exports = app;
