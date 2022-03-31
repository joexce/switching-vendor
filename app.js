const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./src/middleware');
const router = require('./src/router/notificationRouter');
dotenv.config();

const vendorAvailable = process.env.VENDOR_ACTIVATE;
const vendors = process.env.VENDOR_URL;
const getActiveVendor = vendors.split(',');

const app = express();
const port = process.env.PORT || 8080;

app.locals.vendorActive = getActiveVendor[vendorAvailable];

app.use(bodyParser.json({
    limit: 90000
}));

router(app, { ...middleware });

app.listen(port, () => {
    console.log('server is running on port ', port, ' vendor active:', app.locals.vendorActive);
})