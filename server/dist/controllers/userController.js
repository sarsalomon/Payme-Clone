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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const ApiError_1 = require("../error/ApiError");
const users_models_1 = __importDefault(require("../models/users.models"));
const __1 = require("..");
const generateJWT = (id, phone, role) => {
    if (!id || !phone || !role) {
        return 'error';
    }
    const token = jsonwebtoken_1.default.sign({ id, phone, role }, process.env.SECRET_KEY, { expiresIn: '365d' });
    return token;
};
class UserController {
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { phone, password } = req.body;
            const user = yield users_models_1.default.findOne({ phone });
            if (!user) {
                return next(ApiError_1.ApiError.internal("Login yoki Parol noto`g`ri"));
            }
            let comparePassword = bcrypt_1.default.compareSync(password, user.password);
            if (!comparePassword) {
                return next(ApiError_1.ApiError.internal('Login yoki Parol noto`g`ri'));
            }
            const token = generateJWT(user.id, user.phone, user.role);
            return res.json({ token });
        });
    }
    registration(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // for (let i = 1; i<10000; i++) {
            //     const user = await userModels.create({phone:i, password:i, code:i, role:"User", status:false});
            //     console.log(user);
            // }
            const { phone, password, role } = req.body;
            if (!phone) {
                return next(ApiError_1.ApiError.badRequest("telefon raqam yozilmadi"));
            }
            else if (!password) {
                return next(ApiError_1.ApiError.badRequest("Parol yozilmadi"));
            }
            else if (!role) {
                return next(ApiError_1.ApiError.badRequest("Role topilmadi"));
            }
            const checkUser = yield users_models_1.default.findOne({ phone });
            if (checkUser) {
                return next(ApiError_1.ApiError.badRequest("Topildi"));
            }
            const hashPassword = yield bcrypt_1.default.hash(password, 5);
            const generateCode = yield Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
            const user = yield users_models_1.default.create({ phone, password: hashPassword, code: generateCode, role, status: false });
            //some function send activite code, maybe use eskiz.uz
            const token = generateJWT(user.id, user.phone, user.role);
            return res.send({ token });
        });
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield __1.client.get(`users?phone=${2}`);
            if (!users) {
                const user = yield users_models_1.default.findOne({ phone: 2 });
                yield __1.client.setEx(`users?phone=${2}`, 3600, JSON.stringify(user));
                return res.json({ user });
            }
            return res.json({ users });
        });
    }
    check(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = generateJWT(req.user.id, req.user.phone, req.user.role);
            return res.json({ token });
        });
    }
    restartPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.default = new UserController();
