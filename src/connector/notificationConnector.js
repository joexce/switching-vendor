const { smsResponse } = require('../mock/sms-mock-response');

function send(phone, vendor) {
    return smsResponse(phone, vendor);
}


module.exports = {
    send
}