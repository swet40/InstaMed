import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 
import doctorModel from "../models/doctorModel.js";
import {v2 as cloudinary} from "cloudinary";


// -------------------ROUTE FOR ADMIN LOGIN-------------------------
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET_KEY);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};


// Create a new doctor
const createDoctor = async (req, res) => {
    try {
      const { name, email, password, phone, specialization, address, fees , degree, experience } = req.body;
      
      const imageFile = req.file;

      if(!name || !email || !password || !phone || !specialization ||  !address || !degree || !fees){
        return res.json({success: false, message: "Fill all details"})
      }

      if(!validator.isEmail(email)){
        return res.json({success: false, message: "enter a valid email"})
      }

      if (password.length < 7) {
        return res.json({ success: false, message: "enter a strong passowrd" });
      } 

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image"
      })
      const imageUrl = imageUpload.secure_url;


      const newDoctor = new doctorModel({
        name,
        email,
        password: hashedPassword,
        phone,
        image: imageUrl,
        specialization,
        address: JSON.parse(address),
        degree,
        experience,
        fees,
        date: Date.now(),
      });

      await newDoctor.save();
      res.status(201).json({success: true ,message: 'Doctor created successfully' });
    } catch (error) {
      res.status(500).json({success:false, message:error.message });
    }
};

// -----to show all the doctors on admin panel-------
const allDoctors = async (req, res) => {

  try {

      const doctors = await doctorModel.find({}).select('-password')
      res.json({success: true, doctors})

  } catch (e) {
    console.log(e)
    res.json({success: false, message: e.message})
  }

}

export {createDoctor, adminLogin, allDoctors}