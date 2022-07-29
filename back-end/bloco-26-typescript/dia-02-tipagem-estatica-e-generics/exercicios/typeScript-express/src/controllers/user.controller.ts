import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../services/user.service";

export default class UserController {
  constructor(private _service: UserService) {
    this._service = _service;
    this.findAll = this.findAll.bind(this);
  }
  public async findAll(_req: Request, res: Response): Promise<void> {
    const result = await this._service.findAll();
    res.status(StatusCodes.OK).json(result);
  }
}