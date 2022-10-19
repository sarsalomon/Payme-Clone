"use strict";
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
const ApiError_1 = require("../error/ApiError");
const cards_models_1 = __importDefault(require("../models/cards.models"));
class CardController {
    addCard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cardHolderId, cardHolderName, cardName, cardNumber, cardExperienceDate, cardBank, cardType, cardMoney, cardStatus } = req.body;
            console.log(cardStatus);
            if (!cardHolderId) {
                return next(ApiError_1.ApiError.badRequest("Xatoliik1"));
            }
            else if (!cardName) {
                return next(ApiError_1.ApiError.badRequest("Xatoliik2"));
            }
            else if (!cardHolderName) {
                return next(ApiError_1.ApiError.badRequest("Xatoliik3"));
            }
            else if (!cardNumber) {
                return next(ApiError_1.ApiError.badRequest("Xatoliik4"));
            }
            else if (!cardExperienceDate) {
                return next(ApiError_1.ApiError.badRequest("Xatoliik5"));
            }
            else if (!cardBank) {
                return next(ApiError_1.ApiError.badRequest("Xatoliik6"));
            }
            else if (!cardType) {
                return next(ApiError_1.ApiError.badRequest("Xatoliik7"));
            }
            else if (!cardMoney) {
                return next(ApiError_1.ApiError.badRequest("Xatoliik8"));
            }
            const cardFind = yield cards_models_1.default.findOne({ cardNumber, cardExperienceDate, cardHolderName });
            if (cardFind) {
                return next(ApiError_1.ApiError.badRequest("Xatoliik10"));
            }
            const card = yield cards_models_1.default.create({ cardHolderId, cardHolderName, cardName, cardNumber, cardExperienceDate, cardBank, cardType, cardMoney, cardStatus });
            return res.send(card);
        });
    }
    getAllCard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllC = yield cards_models_1.default.find();
            return res.json(getAllC);
        });
    }
    getAllByUserIdCard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllC = yield cards_models_1.default.find();
            return res.json(getAllC);
        });
    }
    getByIdCard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const getByIdC = yield cards_models_1.default.findById(id);
            return res.json(getByIdC);
        });
    }
    updateCard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, cardName } = req.body;
            const updateC = yield cards_models_1.default.findByIdAndUpdate(id, { cardName }, { new: true });
            return res.json(updateC);
        });
    }
    deleteCard(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const deleteC = yield cards_models_1.default.findByIdAndDelete(id);
            return res.json(deleteC);
        });
    }
}
exports.default = new CardController();
