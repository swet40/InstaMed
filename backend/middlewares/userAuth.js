import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    try {
        const { token, refreshToken } = req.headers;

        if (!token) {
            return res.json({ success: false, message: "Not authorized, login again" });
        }

        try {
            const token_decode = jwt.verify(token, process.env.JWT_SECRET);
            req.body.userId = token_decode.id;
            return next();
        } catch (e) {
            if (e.name === "TokenExpiredError") {
                if (!refreshToken) {
                    return res.json({ success: false, message: "Session expired, login again" });
                }

                try {
                    const refresh_decode = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
                    
                    const newAccessToken = jwt.sign(
                        { id: refresh_decode.id },
                        process.env.JWT_SECRET,
                        { expiresIn: "2h" }
                    );

                    res.json({ success: true, accessToken: newAccessToken });
                } catch (refreshError) {
                    return res.json({ success: false, message: "Invalid refresh token, login again" });
                }
            } else {
                return res.json({ success: false, message: e.message });
            }
        }
    } catch (e) {
        console.log(e);
        res.json({ success: false, message: "Authentication error" });
    }
};

export default userAuth;


// export default userAuth;

// import jwt from "jsonwebtoken";

// const userAuth = async (req, res, next) => {
//   try {
//     const token = req.headers['authorization']?.replace('Bearer ', '');

//     if (!token) {
//       return res.json({ success: false, message: "Not authorized login again" });
//     }

//     console.log('Token:', token); // Debugging: print token
//     console.log('JWT Secret:', process.env.JWT_SECRET); // Debugging: print secret key

//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);

//     req.body.userId = token_decode.id;

//     next();
//   } catch (e) {
//     console.log(e);
//     res.json({ success: false, message: e.message });
//   }
// };