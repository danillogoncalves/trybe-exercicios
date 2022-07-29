import User from "../interfaces/user.interface";
import UserModel from "../models/user.model";

export default class UserService {
  constructor(public _model: UserModel) {
    this._model = _model;
  }

  public async findAll(): Promise<User[]> {
    const result = await this._model.findAll();
    return result;
  }

  // public async findEmail(email: string): Promise<User> {}
}