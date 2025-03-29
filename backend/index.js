import express from "express"; 
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); 
import { createServer } from "node:http";
import jwt from "jsonwebtoken"; // Import JWT
import connectDB from "./config/db.js";
import { connectCloudinary } from "./config/cloud.js";
import adminRouter from "./routes/adminRoute.js";
import userRouter from "./routes/userRoutes.js";
import doctorRouter from "./routes/doctorRoutes.js";
import { connectToSocket } from "./controllers/socketManager.js";
import userAuth from "./middlewares/userAuth.js"; // Import user authentication middleware

const app = express();
const port = process.env.PORT || 8080;
const server = createServer(app);
const io = connectToSocket(server);

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

const refreshTokens = []; 

// =================API ENDPOINTS================
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/doctor", doctorRouter);


app.post("/refresh", (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.status(403).json({ success: false, message: "Invalid refresh token" });
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
        if (err) return res.status(403).json({ success: false, message: "Token expired" });

        const newAccessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });

        res.json({ success: true, accessToken: newAccessToken });
    });
});


app.post("/logout", (req, res) => {
    const { refreshToken } = req.body;
    const index = refreshTokens.indexOf(refreshToken);
    if (index > -1) refreshTokens.splice(index, 1); 
    res.json({ success: true, message: "Logged out successfully" });
});

//  Protected Route Example
app.get("/protected", userAuth, (req, res) => {
    res.json({ success: true, message: "Protected data accessed!", userId: req.body.userId });
});

app.get("/", (req, res) => {
    res.send("Running");
});

server.listen(port, () => {
    console.log("Server running on http://localhost:8080/");
});
