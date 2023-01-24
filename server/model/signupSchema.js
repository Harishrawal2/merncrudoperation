import mongoose from "mongoose";

const signupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userSignup = mongoose.model("userSignup", signupSchema);
export default userSignup;
