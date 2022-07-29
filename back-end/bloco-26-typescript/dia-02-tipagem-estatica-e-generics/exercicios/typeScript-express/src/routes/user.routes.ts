import { Router } from "express";
import UserController from "../controllers/user.controller";
import connection from "../models/connection";
import UserModel from "../models/user.model";
import UserService from "../services/user.service";

const userRoutes = Router();

const userModel = new UserModel(connection);
const userService = new UserService(userModel);
const userController = new UserController(userService);

userRoutes.get('/', userController.findAll);

export default userRoutes;