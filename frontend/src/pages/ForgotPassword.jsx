import { Loader, Mail, MailCheck } from "lucide-react";
import { useAuthStore } from "../store/authStore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const { isLoading, forgotPassword, message } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await forgotPassword(email);
      if (success) {
        toast.success(message);
        setIsSubmitted(true);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-700 text-black flex justify-center items-center">
      <div
        className="w-[90%] sm:w-[40%] bg-gray-100 rounded-lg flex flex-col justify-center items-center"
        style={{
          padding: "20px",
        }}
      >
        {!IsSubmitted ? (
          <>
            <h1
              style={{
                fontSize: "1.3em",
                fontWeight: "bold",
                padding: "5px",
              }}
            >
              Forgot Password
            </h1>
            <p>Enter your Email to get the Password Reset Link</p>
            <br />

            <form
              onSubmit={handleSubmit}
              style={{
                width: "80%",
                background: "black",
                padding: "20px",
                borderRadius: "10px",
                color: "white",
              }}
            >
              <div
                style={{
                  background: "black",
                }}
              >
                <label
                  htmlFor="email"
                  style={{ padding: "10px 0" }}
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <div className="flex">
                  <Mail size={30} />
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    style={{ marginLeft: "10px", padding: "5px 7px" }}
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {message && (
                  <div
                    style={{ padding: "5px" }}
                    className="h-0.5 text-red-500"
                  >
                    {message}
                  </div>
                )}
                <button
                  type="submit"
                  className="cursor-pointer"
                  style={{
                    background: "#51a2ff",
                    margin: "30px",
                    fontSize: "1.1em",
                    borderRadius: "5px",
                    width: "70%",
                    padding: "5px 10px",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {isLoading ? <Loader className="animate-spin" /> : "Verify"}
                  {/* <ArrowRightIcon className="w-5 h-5" /> */}
                </button>
              </div>
            </form>
            <br />
            <p>Want to go back {"  "}
                <Link to={"/login"}><span className="underline">Login In</span></Link>
            </p>
          </>
        ) : (
          <>
            <h1
              style={{
                fontSize: "1.3em",
                fontWeight: "bold",
                padding: "5px",
              }}
            >
              Forgot Password
            </h1>
            <p>
              Password Reset Link is sent to your email{" "}
              <span style={{ fontWeight: "bold" }}>{email}</span>
            </p>
            <br />
            <MailCheck size={50} style={{ margin: "20px" }} />
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
