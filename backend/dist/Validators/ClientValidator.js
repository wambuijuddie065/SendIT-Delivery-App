"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchemaLog = exports.ClientSchemaReg = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ClientSchemaReg = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().required().email(),
    contact: joi_1.default.string().required(),
    password: joi_1.default.string().required().min(8)
});
exports.ClientSchemaLog = joi_1.default.object({
    email: joi_1.default.string().required().email(),
    password: joi_1.default.string().required().min(8)
});
