import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log(isLogin ? 'Logging in...' : 'Signing up...', formData);
  };

  const handleGoogleAuth = () => {
    // Handle Google authentication
    console.log('Google auth clicked');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Gradient & Tagline */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Soft overlay pattern for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-12 text-center">
          {/* Logo or decorative element */}
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
          
          {/* Decorative line */}
          <div className="w-24 h-0.5 bg-blue-400/50 mt-12"></div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center lg:text-left mb-10">
            <h1 className="text-3xl sm:text-4xl font-light text-gray-900 mb-3">
              {isLogin ? 'Welcome back' : 'Create account'}
            </h1>
            <p className="text-gray-500 text-lg">
              {isLogin 
                ? 'Enter your details to access your account' 
                : 'Start your journey with PersonaMail'}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex bg-gray-100 p-1 rounded-2xl mb-8 max-w-[240px] mx-auto lg:mx-0">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                isLogin 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                !isLogin 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name - only show for signup */}
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
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Anderson"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="hello@personamail.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Forgot password link - only for login */}
            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/25"
            >
              <span>{isLogin ? 'Login' : 'Create account'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          {/* Google button */}
          {/* <button
            onClick={handleGoogleAuth}
            className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Continue with Google</span>
          </button> */}

          {/* Terms */}
          <p className="text-center text-sm text-gray-500 mt-8">
            By continuing, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Terms</a>
            {' '}and{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;