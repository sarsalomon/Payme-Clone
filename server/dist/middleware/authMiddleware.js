"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (req, res, next) => {
    var _a;
    if (req.method === "OPTIONS") {
        next();
    }
    try {
        // const token = req.header('Authorization')?.replace('Bearer ', '');
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "UnAuthorized" });
        }
        const decodedData = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        req.user = decodedData;
        next();
    }
    catch (e) {
        return res.status(401).json({ message: "Please authenticate" });
    }
};
