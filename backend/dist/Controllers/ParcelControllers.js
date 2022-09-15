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
exports.softDeleteParcel = exports.updateDelivered = exports.getParcel = exports.getParcels = exports.addParcel = void 0;
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
const getParcels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parcels = (yield db.exec('getParcels'));
        res.json(parcels.recordset);
    }
    catch (error) {
        res.json({ error });
    }
});
exports.getParcels = getParcels;
const getParcel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parcel_id = req.params.parcel_id;
        const { recordset } = yield db.exec('getParcel', { parcel_id });
        if (!recordset[0]) {
            res.json({ message: "Parcel Not Found!" });
        }
        else {
            res.json(recordset);
        }
    }
    catch (error) {
        res.json({ error });
    }
});
exports.getParcel = getParcel;
const updateDelivered = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let parcel_id = req.params.parcel_id;
        const { sender_details, receiver_details, pick_up, destination, description, weight, price, status, is_delivered } = req.body;
        const { recordset } = yield db.exec('getParcel', { parcel_id });
        if (!recordset[0]) {
            res.json({ message: 'Parcel Not Found' });
        }
        else {
            yield db.exec('insertUpdateParcel', { parcel_id, sender_details, receiver_details, pick_up, destination, description, weight, price, status, is_delivered });
            res.json({ message: 'Parcel Updated' });
        }
    }
    catch (error) {
        res.json({ error });
    }
});
exports.updateDelivered = updateDelivered;
const softDeleteParcel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let parcel_id = req.params.parcel_id;
        const { is_cancelled } = req.body;
        const { recordset } = yield db.exec('getParcel', { parcel_id });
        if (!recordset[0]) {
            res.json({ message: "Parcel Not Found" });
        }
        else {
            yield db.exec('deleteParcel', { parcel_id });
            res.json({ message: 'Parcel cancelled' });
        }
    }
    catch (error) {
        res.json({ error });
    }
});
exports.softDeleteParcel = softDeleteParcel;
//get sender_parcel
//get receiver_parcel
