const response = require('./vendors.json');

function smsResponse(phone, vendor){
    return {
        reciever: phone,
        response: {
            ...response[vendor]
        }
    }
}

module.exports.smsResponse = smsResponse;