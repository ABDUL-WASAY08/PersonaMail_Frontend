import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  ArrowBigLeft,
  ArrowBigLeftDash,
  ArrowLeft,
} from "lucide-react";
import Userstore from "../Store/useUserStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AuthScreen = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { login, Registration, loading } = Userstore();
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, fullName } = formData;
    if (isLogin) {
      const response = await login({ email, password });
      if (response?.status) {
        toast.success("Login Successfully");
        navigate("/");
      }
    } else {
      const response = await Registration({ name: fullName, email, password });
      if (response?.status) {
        toast.success("Registration Successfully");
        navigate("/");
      }
    }
  };
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <ArrowLeft size={40} className="text-white m-5 hover:text-blue-500 z-3 cursor-pointer"onClick={()=>navigate('/')} />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full px-12 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/5 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/10">
              <Mail className="w-10 h-10 text-blue-400" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Persona<span className="font-semibold text-blue-400">Mail</span>
          </h2>

          <p className="text-2xl md:text-3xl text-white/90 font-light max-w-lg leading-relaxed">
            Scale your Instagram audience with AI-powered Emails
          </p>
          <div className="w-24 h-0.5 bg-blue-400/50 mt-12"></div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="w-full max-w-md">
          <div className="text-center lg:text-left mb-10">
            <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-3">
              {isLogin ? "Welcome back" : "Create account"}
            </h1>
            <p className="text-gray-500 text-lg">
              {isLogin
                ? "Enter your details to access your account"
                : "Start your journey with PersonaMail"}
            </p>
          </div>
          <div className="flex bg-gray-100 p-1 rounded-2xl mb-8 max-w-[240px] mx-auto lg:mx-0">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                isLogin
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                !isLogin
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Sign Up
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Anderson"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
            )}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="hello@personamail.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>
            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Forgot password?
                </button>
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/25"
            >
              <span>{isLogin ? "Login" : "Create account"}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            By continuing, you agree to our{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AuthScreen;
