const notificationService = require('./notificationService');
const login = require('./login');

exports.sendSmsNotification = function (req, res) {
    return res.json(notificationService.sendSmsNotification(req, res));
}

exports.login = function (req, res) {
    return res.json(login.login(req, res));
}