import { IUser } from "../../model/user.model";
import { userRepository } from "./user.repository";
import {
  UnprocessableError,
  ValidationError,
} from "../../utils/customError";

export const userService = {
  async createUser(createUser: IUser) {
    const user = await userRepository.getOneUser({ email: createUser?.email });
    if (user)
      throw new ValidationError("User already registered. Proceed to login");
    const savedUser = await userRepository.createUser(createUser);
    if (!savedUser) throw new UnprocessableError("Unsaved User");
    return savedUser;
  },
};
