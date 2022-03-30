'use strict';
const service = require('../service/notificationService');
const auth = require('../service/login');

module.exports = function (app, { validation }) {
    app.route('/send-sms-notification').get(validation, service.sendSmsNotification);

    app.route('/login').post(auth.login);
};