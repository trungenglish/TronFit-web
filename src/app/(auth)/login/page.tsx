'use client'

import { Button } from "@/components/ui/button"
import LoginForm from "@/features/auth/components/loginForm";
import Link from "next/link"
import { useState } from "react";

export default function LoginPage() {
  const [currentLang] = useState('vi');

    return (
      <div className="pt-24 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-md w-full">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {currentLang === 'vi' ? 'ĐĂNG NHẬP' : 'LOGIN'}
              </h1>
              <p className="text-zinc-400">
                {currentLang === 'vi' 
                  ? 'Tiếp tục hành trình thể hình của bạn'
                  : 'Continue your fitness journey'
                }
              </p>
            </div>

            {/* Form */}
            <LoginForm currentLang={currentLang}/>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-zinc-700"></div>
              <span className="px-4 text-zinc-400 text-sm">
                {currentLang === 'vi' ? 'hoặc' : 'or'}
              </span>
              <div className="flex-1 border-t border-zinc-700"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <Button
                type="button"
                className="w-full bg-white hover:bg-gray-100 text-gray-900 border-0 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                {currentLang === 'vi' ? 'Đăng nhập với Google' : 'Login with Google'}
              </Button>

              <Button
                type="button"
                className="w-full bg-[#1877F2] hover:bg-[#166FE5] text-white border-0 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                {currentLang === 'vi' ? 'Đăng nhập với Facebook' : 'Login with Facebook'}
              </Button>
            </div>

            {/* Sign up link */}
            <div className="text-center mt-6">
              <p className="text-zinc-400">
                {currentLang === 'vi' ? 'Chưa có tài khoản?' : "Don't have an account?"}{' '}
                <Link href="/register" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  {currentLang === 'vi' ? 'Đăng ký ngay' : 'Sign up now'}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }