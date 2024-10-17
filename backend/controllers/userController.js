import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET_KEY,{
        expiresIn: 4* 24 * 60 * 60,
    }
    )
}


const loginUser = async (req, res) => {

    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success: false, message: "No such user exists"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = createToken(user._id)
            return res.json({success: true, token})
        }else{
            return res.json({success: false, message: "Invalid credentials"})
        }


    } catch (e) {
        console.log(e)
    }
   


}


const registerUser = async (req, res) => {
    try {
        
        const { name, email, password } = req.body;
        const exists = await userModel.findOne({email});

// ==================CHECKING USER ALREADY EXISTS==========

        if (exists) {
            return res.json({success: false, message: "User already exists"})
        }

// ===============VALIDATING EMAIL FORMAT & STRONG PASSWORD=============

        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Enter a vlaid email"})
        }
        
        if (password.length < 7) {
            return res.json({success: false, message: "Enter a strong password"})
        }

// ================ HASHING USER PASSWORD ===============

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        }) 

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success: true, token})

    } catch (e) {
        console.log(e);
        res.json({success: false, message: e.message})
    }
}



// -------------------ROUTE FOR ADMIN LOGIN-------------------------
const adminLogin = async (req, res) => {
    try {
        
        const {email, password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET_KEY)
            res.json({success: true, token })
        }else{
            res.json({success: false, message: "Invalid credentials"})
        }


    } catch (e) {
        console.log(e)
        res.json({success: false, message: e.message})
    }
}


export {loginUser, registerUser, adminLogin};