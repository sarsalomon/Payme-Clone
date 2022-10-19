"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../error/ApiError");
const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError_1.ApiError) {
        return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: "not reg error!" });
};
exports.default = errorHandler;
