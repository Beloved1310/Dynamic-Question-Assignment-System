import User, { IUser } from "../../model/user.model";


export const userRepository = {
  async getOneUser(credential: {}): Promise<IUser | null> {
    const user = await User.findOne(credential).select("-__v");
    return user;
  },

  async getUsers(credential: {}): Promise<IUser[] | null> {
    const users = await User.find(credential).select("-__v");
    return users;
  },
  
  async createUser(createUser: {}): Promise<Partial<IUser>> {
    const createdUser = await User.create(createUser);
    return createdUser;
  },

};
