import express from "express";
import {
  getUsers,
  addUser,
  getUserById,
  editUser,
  deleteUser,
  signupUser,
  loginUser,
} from "../controller/user-controller.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/add", addUser);
router.get("/:id", getUserById);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

// user signup
router.post("/signup", signupUser);
router.post("/login", loginUser);

// blog 


export default router;
