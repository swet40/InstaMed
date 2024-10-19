import express from "express";
import { createDoctor,adminLogin, allDoctors } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import adminAuth from "../middlewares/adminAuth.js";

const adminRouter = express.Router();


adminRouter.post("/add-doctor", adminAuth, upload.single("image") ,  createDoctor)
adminRouter.post("/login", adminLogin)
adminRouter.post("/all-doctors",adminAuth, allDoctors)

export default adminRouter