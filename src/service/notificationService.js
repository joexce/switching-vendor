const connector = require('../connector/notificationConnector');

function sendSmsNotification(req, res) {
    const vendor = req.app.locals.vendorActive;
    const smsResponse = connector.send(req.query.phone, vendor);
    if(Object.keys(smsResponse.response).length === 0){
        return {
            error: 'No Vendor Was Found'
        };
    }

    return smsResponse; 
}

module.exports = {
    sendSmsNotification: (req, res) => sendSmsNotification(req, res)
}