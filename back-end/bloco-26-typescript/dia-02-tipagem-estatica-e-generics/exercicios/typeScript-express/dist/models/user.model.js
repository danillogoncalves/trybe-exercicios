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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const { DB_DATABASE } = process.env;
class UserModel {
    constructor(_connection) {
        this._connection = _connection;
        this._connection = _connection;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const QUERY = `SELECT * FROM ${DB_DATABASE}.Users`;
            const [result] = yield this._connection.execute(QUERY);
            return result;
        });
    }
    findEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const QUERY = `SELECT * FROM ${DB_DATABASE}.Users WHERE email = ?`;
            const [result] = yield this._connection.execute(QUERY, email);
            const [user] = result;
            return user;
        });
    }
}
exports.default = UserModel;
