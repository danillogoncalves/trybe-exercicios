import Connection from "../Connection";
import IUser from "../entities/IUser";

export default class UserRepository {
  public static async create(newUser: IUser): Promise<void> {
    await Connection.execute(
      'INSERT INTO solid_example.users (username, email, password) VALUES (?,?,?)',
      [newUser.username, newUser.email, newUser.password],
    );
  }
}