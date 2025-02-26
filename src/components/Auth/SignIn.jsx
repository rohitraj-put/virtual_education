import React, { useState } from "react";
import { motion } from "framer-motion";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex justify-center items-center my-12 ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-[#20b486]"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <form>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="email"
              >
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="password"
              >
                Password
              </label>
              <motion.input
                whileFocus={{ scale: 1.05 }}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-100"
                type={showPassword ? "text" : "password"}
                id="password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 top-7 right-0 px-3 py-2 focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#20b486] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
              >
                Sign In
              </motion.button>
              <a
                className="text-sm text-[#20b486] hover:underline"
                href="#forgot-password"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SignIn;
