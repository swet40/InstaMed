import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
    await mongoose
        .connect(process.env.DB_URL)
        .then(() => {
        console.log("connected to db");
    })
    .catch((e) => console.log(e));
};
