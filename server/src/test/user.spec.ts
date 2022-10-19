import chai, { assert } from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

if (!global.Promise) {
    global.Promise = require('q');
  }
describe('User', () => {

});

describe('Card', () => {

    it('it Test Add Post Card', async () => {
        let user = {
            cardHolderId: 1,
            cardName: "Yulchiyev Sarvarjon Alijon o'g'li",
            cardHolderName: "Yulchiyev Sarvarjon Alijon o'g'li",
            cardNumber: 87687665435665433,
            cardExperienceDate: 927,
            cardBank: 1,
            cardType: 2,
            cardMoney: 500000,
            cardStatus: false
        }

        const res = await chai.request("http://localhost:5000/api")
            .post('/card/add')
            .send(user);
        assert.equal(res.status, 200)
        assert.equal(res.body.cardHolderId, user.cardHolderId)
        assert.equal(res.body.cardName, user.cardName)
        assert.equal(res.body.cardHolderName, user.cardHolderName)
        assert.equal(res.body.cardNumber, user.cardNumber)
        assert.equal(res.body.cardExperienceDate, user.cardExperienceDate)
        assert.equal(res.body.cardBank, user.cardBank)
        assert.equal(res.body.cardType, user.cardType)
        assert.equal(res.body.cardMoney, user.cardMoney)
        assert.equal(res.body.cardStatus, user.cardStatus)
    });

    it('it Test Exits Card', async () => {
        let user = {
            cardHolderId: 1,
            cardName: "Yulchiyev Sarvarjon Alijon o'g'li",
            cardHolderName: "Yulchiyev Sarvarjon Alijon o'g'li",
            cardNumber: 87687665435665433,
            cardExperienceDate: 927,
            cardBank: 1,
            cardType: 2,
            cardMoney: 500000,
            cardStatus: false
        }

        const res = await chai.request("http://localhost:5000/api")
            .post('/card/add')
            .send(user);
            console.log(res.text)
        assert.equal(res.text, 'Card exits')
        assert.equal(res.status, 200)

    });
});

describe('Transfer', () => {

});