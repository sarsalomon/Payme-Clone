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
exports.client = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const ErrorHandlingMiddleware_1 = __importDefault(require("./middleware/ErrorHandlingMiddleware"));
const apollo_server_express_1 = require("apollo-server-express");
const TypeDefs_1 = __importDefault(require("./graphql/TypeDefs"));
const Resolvers_1 = __importDefault(require("./graphql/Resolvers"));
const redis_1 = require("redis");
exports.client = (0, redis_1.createClient)();
exports.client.on('error', (err) => {
    console.log("Error " + err);
});
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
const server = new apollo_server_express_1.ApolloServer({ typeDefs: TypeDefs_1.default, resolvers: Resolvers_1.default });
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', index_1.default);
app.use(ErrorHandlingMiddleware_1.default);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server Working' });
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose_1.default.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        yield server.start();
        yield exports.client.connect();
        server.applyMiddleware({ app });
        app.listen(PORT, () => { console.log(`Servers started port on ${PORT}`); });
    }
    catch (e) {
        console.log(e);
    }
});
start();
