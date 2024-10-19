import jwt from "jsonwebtoken";


const userAuth = async (req, res, next) => {

    try {

        const { token } = req.headers

        if(!token){
            return res.json({success: false, message: "Not authorized login again, kyunki token nhi h yar "})
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        
        req.body.userId = token_decode.id

        next()

    } catch (e) {
        console.log(e)
        res.json({success: false, message: e.message})
    }

}


export default userAuth;