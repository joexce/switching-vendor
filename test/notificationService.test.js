const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const { spy } = require("sinon");
const service = require('../src/service/notificationService');

chai.use(chaiHttp);
chai.should();

describe('notificationService', () => {

    /**
     * Configure parameter
     */
    let req = {
        app: {
            locals: {
                vendorActive: 'vendor-A'
            }
        },
        query: {
            phone: '+628282'
        }
    }
    
    let res = {
        json: spy()
    }

    describe('sendSmsNotification service test', () => {
        it("should have object response", () => {
            const sms = service.sendSmsNotification(req, res);
            expect(sms).to.be.an('object');
        });

        it("should call response from vendor A", () => {
            const sms = service.sendSmsNotification(req, res);
            expect(sms.response.service).to.be.equal('vendor-A');
        });

        it("should call response from vendor B", () => {
            req.app.locals.vendorActive = 'vendor-B';
            const sms = service.sendSmsNotification(req, res);
            expect(sms.response.service).to.be.equal('vendor-B');
        });

        it("should call response from vendor C", () => {
            req.app.locals.vendorActive = 'vendor-C';
            const sms = service.sendSmsNotification(req, res);
            expect(sms.response.service).to.be.equal('vendor-C');
        });

        it("should call error response from empty vendor", () => {
            req.app.locals.vendorActive = 'vendor-D';
            const sms = service.sendSmsNotification(req, res);
            expect(sms).to.have.property('error');
        });
    });
});