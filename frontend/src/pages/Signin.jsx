import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = async () => {
        if (!username || !password) {
            alert("Please enter both email and password!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
            });

            // ✅ Store Token
            localStorage.setItem("token", response.data.token);

            // ✅ Redirect to dashboard
            alert("Login successful!");
            navigate("/dashboard");

        } catch (error) {
            console.error("Signin failed:", error);
            alert(error.response?.data?.message || "Invalid credentials! Try again.");
        }
    };

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"} />
                    <InputBox onChange={(e) => setUsername(e.target.value)} placeholder="sujal@gmail.com" label={"Email"} />
                    <InputBox onChange={(e) => setPassword(e.target.value)} type="password" placeholder="123456" label={"Password"} />
                    <div className="pt-4">
                        <Button onClick={handleSignin} label={"Sign in"} />
                    </div>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    );
};

export default Signin;
