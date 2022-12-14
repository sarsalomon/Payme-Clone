"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cardRoute_1 = __importDefault(require("./cardRoute"));
const transferRoute_1 = __importDefault(require("./transferRoute"));
const userRoute_1 = __importDefault(require("./userRoute"));
router.use('/card', cardRoute_1.default);
router.use('/transfer', transferRoute_1.default);
router.use('/user', userRoute_1.default);
exports.default = router;
