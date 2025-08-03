import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(3);
    let r = await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    let res = await r.text()
    console.log(data, res);

    // const blockedUsernames = ["admin", "azmeer", "usman", "ali"];

    // if (blockedUsernames.includes(data.username.toLowerCase())) {
    //   setError("username", {
    //     type: "manual",
    //     message: `${data.username} is not allowed.`,
    //   });
    //   return; // stop submission
    // }

    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        {/* Blur + Loading Overlay (Only inside card) */}
        {isSubmitting && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-lg">
            <span className="text-xl font-semibold text-blue-600">Loading...</span>
          </div>
        )}

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Sign Up
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please enter your details below
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${errors.username
                ? 'border-red-500 focus:ring-red-300'
                : 'focus:ring-blue-300'
                }`}
              {...register("username", {
                required: "Username is required",
                minLength: { value: 3, message: "Min 3 characters" },
                maxLength: { value: 10, message: "Max 10 characters" },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Only letters allowed",
                },
              })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 ${errors.password
                ? 'border-red-500 focus:ring-red-300'
                : 'focus:ring-blue-300'
                }`}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,20}$/,
                  message:
                    "8-20 chars with upper, lower, digit & special char",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-sm text-blue-500 hover:underline"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors"
          >
            Submit
          </button>
          {/* {errors.admin && (
            <p className="text-red-500 text-sm mt-1">
              {errors.admin.message}
            </p>
          )} */}

        </form>
      </div>
    </div>
  );
}

export default App;
