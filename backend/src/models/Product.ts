import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  imagenPach: string;
}

const schema = new Schema({
  name: String,
  description: String,
  price: Number,
  imagenPach: String
});

export default model<IProduct>("Product", schema);
