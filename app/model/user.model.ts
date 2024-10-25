import mongoose, { Document, Schema } from 'mongoose';
import { Regions } from '../constants/region';

interface IUser extends Document {
  name: string;
  email: string;
  region: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  region: { type: String, enum: Object.values(Regions), required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
