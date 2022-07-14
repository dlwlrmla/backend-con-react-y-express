"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//configuration .env
dotenv_1.default.config();
//create express app
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.send("<h1>express tsc nodemon</h1>");
});
app.get('/hello', (req, res) => {
    res.send("welcome to get route : !hello");
});
app.listen(port, () => {
    console.log("running");
});
//# sourceMappingURL=index.js.map