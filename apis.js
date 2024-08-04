import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bearerToken from 'express-bearer-token';
import config from './config/config.js';
import pointRoutes from './routes/PointRoutes.js';

// Initialize express app
const app = express();
app.disable('x-powered-by'); // security

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bearerToken());
app.use(cookieParser());
app.use(session({
  secret: '34SDgsdgsp908jhjkhdfsG', 
  resave: true,
  saveUninitialized: true
}));


// Routes
app.use(config.MAIN_URL_APIS, pointRoutes);

// Base route
app.get('/test', (req, res) => {
    res.send('API Server is running on port ' + config.API_PORT);
});

// Run App
const server = app.listen(config.API_PORT, function () {
    console.log('App served on: http://' + config.HOSTNAME + ':' + config.API_PORT);
});

export default server;
  
// // in VPS
// https.createServer({
//   key: fs.readFileSync('/etc/letsencrypt/live/devstorm.pro/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/devstorm.pro/cert.pem')
// }, app).listen(config.API_PORT, () => {
//   console.log('app served on: https://' + config.HOSTNAME + ':' + config.API_PORT)
// })

