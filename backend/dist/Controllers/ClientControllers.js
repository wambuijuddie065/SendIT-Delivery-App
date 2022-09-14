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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClients = exports.loginClient = exports.registerClient = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../DatabaseHelpers/db"));
const ClientValidator_1 = require("../Validators/ClientValidator");
const db = new db_1.default();
dotenv_1.default.config();
const registerClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, uuid_1.v4)();
        let { name, email, contact, password } = req.body;
        const { error, value } = ClientValidator_1.ClientSchemaReg.validate(req.body);
        if (error) {
            res.json({ error: error.details[0].message });
        }
        const client_id = id;
        password = yield bcrypt_1.default.hash(password, 10);
        db.exec('insertClient', { client_id, name, email, contact, password });
        // res.json({message:"Client added successfully"})
        res.status(201).json({ message: "Client added successfully" });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.registerClient = registerClient;
const loginClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name, email, contact, password } = req.body;
        const { error, value } = ClientValidator_1.ClientSchemaLog.validate(req.body);
        if (error) {
            res.json({ error: error.details[0].message });
        }
        const client = (yield db.exec('getClient', { email })).recordset;
        if (!client[0]) {
            return res.json({ message: "client Not Found!" });
        }
        else {
            const validPassword = yield bcrypt_1.default.compare(password, client[0].password);
            if (!validPassword) {
                return res.json({ message: "Invalid Password!" });
            }
            const payload = client.map((item) => {
                const { password } = item, rest = __rest(item, ["password"]);
                return rest;
            });
            const token = jsonwebtoken_1.default.sign(payload[0], process.env.KEY, {
                expiresIn: "3600000s"
            });
            return res.json({ message: "Client Logged In Successfully!", token, role: client[0].role });
        }
    }
    catch (error) {
        res.json({ error });
    }
});
exports.loginClient = loginClient;
// export const getDashboard=async(req:Extended,res:Response)=>{
//     if(req.info){
//         res.json({message:`Dear ${req.info.name} Welcome to the dashboard`})
//     }
// }
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = (yield db.exec('getClients'));
        res.json(clients.recordset);
    }
    catch (error) {
        res.json({ error });
    }
});
exports.getClients = getClients;
