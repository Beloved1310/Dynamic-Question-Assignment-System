import mongoose, { Document, Schema } from 'mongoose';

interface IUserAssignment extends Document {
  userId: string;
  questionId: mongoose.Types.ObjectId;
  assignedDate: Date;
  region: string;
}

const UserAssignmentSchema = new Schema<IUserAssignment>({
  userId: { type: String, required: true },
  questionId: { type: Schema.Types.ObjectId, ref: 'Question', required: true },
  assignedDate: { type: Date, default: Date.now },
  region: { type: String, required: true },
});

const UserAssignment = mongoose.model<IUserAssignment>('UserAssignment', UserAssignmentSchema);
export default UserAssignment;
