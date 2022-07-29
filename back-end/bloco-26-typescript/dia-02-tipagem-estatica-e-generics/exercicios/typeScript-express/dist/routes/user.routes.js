"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const connection_1 = __importDefault(require("../models/connection"));
const user_model_1 = __importDefault(require("../models/user.model"));
const user_service_1 = __importDefault(require("../services/user.service"));
const userRoutes = (0, express_1.Router)();
const userModel = new user_model_1.default(connection_1.default);
const userService = new user_service_1.default(userModel);
const userController = new user_controller_1.default(userService);
userRoutes.get('/', userController.findAll);
exports.default = userRoutes;
