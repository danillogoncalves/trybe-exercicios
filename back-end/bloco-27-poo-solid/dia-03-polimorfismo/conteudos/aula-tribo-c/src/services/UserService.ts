import User from "../models/entities/User"
import UserRepository from "../models/repository/UserRepository"

export default class UserService {

  public static async create(user: User): Promise<void> {
    const result = await UserRepository.create(user)
    return result
  }
}