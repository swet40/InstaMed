import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const {token, setToken, backendUrl} = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {

      if(currState === "Sign up"){
        const {data} = await axios.post(backendUrl + "/user/register", {name, email, password})

        if(data.success){
          localStorage.setItem("token",data.token)
          setToken(data.token)
        }else{
          toast.error(data.message)
        }
      }else{

        const {data} = await axios.post(backendUrl + "/user/login", { email, password})

        if(data.success){
          localStorage.setItem("token",data.token)
          setToken(data.token)
        }else{
          toast.error(data.message)
        }

      }


    } catch (e) {
      console.log(e)
      toast.error(e.message)
    }
  };

  useEffect(()=>{
    if(token){
      navigate("/")
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-[350px] border rounded-xl text-zinc-600 text-sm sgadow-lg">
        <div className="inline-flex items-center  gap-2 mb-2">
          <p className="prata-regular text-3xl">{currState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currState === "Login" ? (
          <p>Please login to book appointment</p>
        ) : (
          <p>Please sign up to get started</p>
        )}

        {currState === "Login" ? (
          <></>
        ) : (
          <input
            type="text"
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        )}
        <input
          type="email"
          className="border bprder-zinc-300 rounded w-full p-2 mt-1"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          className="border bprder-zinc-300 rounded w-full p-2 mt-1"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <div className="w-full text-sm">
          {currState === "Login" ? (
            <></>
          ) : (
            <p className="cursor-pointer">Forgot your password?</p>
          )}
        </div>
        <button type="submit" className="bg-primary text-white w-full py-2 rounded-md text-base">
          {currState === "Login" ? "Login" : "Sing Up"}
        </button>
        <div>
          {currState === "Login" ? (
            <p>
              Don't have an account?
              <span
                onClick={() => setCurrState("Sign Up")}
                className="text-blue-500 cursor-pointer"
              >
                Create Account
              </span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span
                onClick={() => setCurrState("Login")}
                className="text-blue-500 cursor-pointer"
              >
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default Login;
