"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = express_1.default.Router();
router.post('/');
router.post('/get/:id');
router.get('/getall', userController_1.default.getAll);
router.get('/delete');
router.post('/registration', userController_1.default.registration);
router.post('/resartpassword', userController_1.default.restartPassword);
router.post('/login', userController_1.default.login);
router.get('/auth', authMiddleware_1.default, userController_1.default.check);
exports.default = router;
