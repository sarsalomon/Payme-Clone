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
const transfers_model_1 = __importDefault(require("../models/transfers.model"));
class TransferController {
    getAllTransfer(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllT = yield transfers_model_1.default.find();
            return res.json(getAllT);
        });
    }
    getAllByUserIdTransfer(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllT = yield transfers_model_1.default.find();
            return res.json(getAllT);
        });
    }
    createTransfer(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fromUser, toUser, fromUserCardId, toUserCardId, money, status } = req.body;
            if (!fromUser) {
                return next(ApiError_1.ApiError.badRequest('kotini qis'));
            }
            else if (!toUser) {
                return next(ApiError_1.ApiError.badRequest('kotini qis'));
            }
            else if (!fromUserCardId) {
                return next(ApiError_1.ApiError.badRequest('kotini qis'));
            }
            else if (!toUserCardId) {
                return next(ApiError_1.ApiError.badRequest('kotini qis'));
            }
            else if (!money) {
                return next(ApiError_1.ApiError.badRequest('kotini qis'));
            }
            const createT = yield transfers_model_1.default.create({ fromUser, toUser, fromUserCardId, toUserCardId, money, status });
            return res.json(createT);
        });
    }
    updateTransfer(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getByIdTransfer(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const getByIdT = yield transfers_model_1.default.findById(id);
            return res.json(getByIdT);
        });
    }
    deleteTransfer(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    checkTransfer(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    cancelTrnasfer(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const cancelT = yield transfers_model_1.default.findByIdAndUpdate(id, { status: 4 }, { new: true });
            return res.json(cancelT);
        });
    }
}
exports.default = new TransferController();
