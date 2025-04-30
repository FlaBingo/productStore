import { useAuthStore } from "../store/authStore";
import { Loader, Lock } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassowrd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();
  const { resetPassword, isLoading, message } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(newPassword.length < 8){
        toast.error("Password should at least 8 character long")
    }
    if (!newPassword || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not Match!");
      return;
    }
    try {
      const success = await resetPassword(token, newPassword);
      if (success) {
        toast.success(message);
        navigate("/login", {replace: true})
      } else {
        toast.success(message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Error resetting password");
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-700 text-black flex justify-center items-center">
        <div
          className="w-[90%] sm:w-[40%] bg-gray-100 rounded-lg flex flex-col justify-center items-center"
          style={{
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "1.3em",
              fontWeight: "bold",
              padding: "5px",
            }}
          >
            Enter the New Password
          </h1>
          {/* <p>Enter your Email to get the Password Reset Link</p> */}
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
              <div>
                <label
                  htmlFor="newPassword"
                  style={{ padding: "10px 0" }}
                  className="block text-sm font-medium mb-2"
                >
                  New Password
                </label>
                <div className="flex">
                  <Lock size={30} />
                  <input
                    type="password"
                    id="newPassword"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    style={{ marginLeft: "10px", padding: "5px 7px" }}
                    placeholder="Enter new password"
                    // required
                    value={newPassword}
                    onChange={(e) => setNewPassowrd(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  style={{ padding: "10px 0" }}
                  className="block text-sm font-medium mb-2"
                >
                  Confirm Password
                </label>
                <div className="flex">
                  <Lock size={30} />
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                    style={{ marginLeft: "10px", padding: "5px 7px" }}
                    placeholder="confirm new password"
                    // required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
