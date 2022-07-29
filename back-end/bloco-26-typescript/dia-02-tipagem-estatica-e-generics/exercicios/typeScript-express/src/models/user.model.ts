import { Pool } from 'mysql2/promise'
import User from '../interfaces/user.interface';
import 'dotenv/config';
const { DB_DATABASE } = process.env;

export default class UserModel {
  constructor(public _connection: Pool) {
    this._connection = _connection;
  }

  public async findAll(): Promise<User[]> {
    const QUERY = `SELECT * FROM ${DB_DATABASE}.Users`
    const [result] = await this._connection.execute(QUERY);
    return result as User[];
  }

  public async findEmail(email: string): Promise<User | undefined> {
    const QUERY = `SELECT * FROM ${DB_DATABASE}.Users WHERE email = ?`;
    const [result] = await this._connection.execute(QUERY, email);
    const [user] = result as User[] | [];
    return user;
  }
}