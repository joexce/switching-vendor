'use strict';
const service = require('../service');
const auth = require('../service/login');

module.exports = function (app, { validation }) {
    app.route('/send-sms-notification').post(validation, service.sendSmsNotification);

    app.route('/login').post(auth.login);
};