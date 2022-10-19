"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cardController_1 = __importDefault(require("../controllers/cardController"));
const router = express_1.default.Router();
router.post('/', cardController_1.default.getAllCard);
router.post('/add', cardController_1.default.addCard);
router.post('/update', cardController_1.default.updateCard);
router.post('/get/:id', cardController_1.default.addCard);
router.get('/delete', cardController_1.default.addCard);
exports.default = router;
