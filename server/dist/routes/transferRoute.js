"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transferController_1 = __importDefault(require("../controllers/transferController"));
const router = express_1.default.Router();
router.post('/', transferController_1.default.getAllTransfer);
router.post('/add', transferController_1.default.createTransfer);
router.post('/update', transferController_1.default.updateTransfer);
router.post('/get/:id', transferController_1.default.getByIdTransfer);
router.get('/delete', transferController_1.default.deleteTransfer);
router.get('/checkTrnasfer/:id', transferController_1.default.checkTransfer);
router.get('/cancelTrnasfer/:id', transferController_1.default.cancelTrnasfer);
exports.default = router;
