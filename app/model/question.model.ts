import mongoose, { Document, Schema } from 'mongoose';
import { Regions } from '../constants/region';

interface IQuestion extends Document {
  content: string;
  region: string;
  cycleIndex: number;
}

const QuestionSchema = new Schema<IQuestion>({
  content: { type: String, required: true },
  region: { type: String, enum: Object.values(Regions), required: true },
  cycleIndex: { type: Number, required: true },
});

const Question = mongoose.model<IQuestion>('Question', QuestionSchema);
export default Question;