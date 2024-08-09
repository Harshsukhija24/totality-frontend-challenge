import { Schema, models, model } from "mongoose";

const buyerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Use existing model or create a new one

const Buyer = models.Buyer || model("Buyer", buyerSchema);

export default Buyer;
