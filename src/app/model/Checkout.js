import { Schema, models, model } from "mongoose";

// Define the schema for the checkout process
const checkoutSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  adharCard: {
    type: String,
    required: true,
  },
  panCard: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Checkout = models.Checkout || model("Checkout", checkoutSchema);

export default Checkout;
