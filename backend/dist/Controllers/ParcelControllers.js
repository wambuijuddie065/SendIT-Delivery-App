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
exports.addParcel = void 0;
const uuid_1 = require("uuid");
const db_1 = __importDefault(require("../DatabaseHelpers/db"));
const db = new db_1.default();
const addParcel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, uuid_1.v4)();
        const { sender_details, receiver_details, pick_up, destination, description, weight, price, status } = req.body;
        const parcel_id = id;
        // console.log(parcel_id);
        db.exec('insertUpdateParcel', { parcel_id, sender_details, receiver_details, pick_up, destination, description, weight, price, status });
        res.status(201).json({ message: "Parcel Added Successfully!" });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.addParcel = addParcel;
