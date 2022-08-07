import { Request, Response } from "express";
import User from "../models/entities/User";
import UserService from "../services/UserService";

export class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    //const { username, email, password } = eq.body as IUser;

    try {
      await UserService.create(req.body as User);
      res.status(200).json({
        message: 'Usuário criado com sucesso!',
      });
    } catch (error) {
      res.status(400).json({ message: error });
    }

  }
}