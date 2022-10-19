"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importStar(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
chai_1.default.use(chai_http_1.default);
if (!global.Promise) {
    global.Promise = require('q');
}
describe('User', () => {
});
describe('Card', () => {
    it('it Test Add Post Card', () => __awaiter(void 0, void 0, void 0, function* () {
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
        };
        const res = yield chai_1.default.request("http://localhost:5000/api")
            .post('/card/add')
            .send(user);
        chai_1.assert.equal(res.status, 200);
        chai_1.assert.equal(res.body.cardHolderId, user.cardHolderId);
        chai_1.assert.equal(res.body.cardName, user.cardName);
        chai_1.assert.equal(res.body.cardHolderName, user.cardHolderName);
        chai_1.assert.equal(res.body.cardNumber, user.cardNumber);
        chai_1.assert.equal(res.body.cardExperienceDate, user.cardExperienceDate);
        chai_1.assert.equal(res.body.cardBank, user.cardBank);
        chai_1.assert.equal(res.body.cardType, user.cardType);
        chai_1.assert.equal(res.body.cardMoney, user.cardMoney);
        chai_1.assert.equal(res.body.cardStatus, user.cardStatus);
    }));
    it('it Test Exits Card', () => __awaiter(void 0, void 0, void 0, function* () {
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
        };
        const res = yield chai_1.default.request("http://localhost:5000/api")
            .post('/card/add')
            .send(user);
        console.log(res.text);
        chai_1.assert.equal(res.text, 'Card exits');
        chai_1.assert.equal(res.status, 200);
    }));
});
describe('Transfer', () => {
});
