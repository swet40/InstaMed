import express from "express"
import cors from "cors";
import "dotenv/config";




// =================APP CONFIG========================
const app = express();
const port  = process.env.PORT || 8080;
// connectDB();





// =======================MIDDLEWARES=====================
app.use(express.json());
app.use(cors());



// =================API ENDPOINTS================


app.get("/", (req, res) => {
    res.send("Running")
})



app.listen(port, () => {
    console.log("Server running on http://localhost:8080/")
})