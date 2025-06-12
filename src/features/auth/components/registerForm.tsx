
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterForm({ currentLang }: { currentLang: string }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-zinc-100">
            {currentLang === 'vi' ? 'Họ và tên' : 'Full Name'}
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:border-red-500"
            placeholder={currentLang === 'vi' ? 'Nhập họ và tên' : 'Enter your full name'}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-zinc-100">
            {currentLang === 'vi' ? 'Email' : 'Email'}
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:border-red-500"
            placeholder={currentLang === 'vi' ? 'Nhập email của bạn' : 'Enter your email'}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-zinc-100">
            {currentLang === 'vi' ? 'Mật khẩu' : 'Password'}
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:border-red-500"
            placeholder={currentLang === 'vi' ? 'Nhập mật khẩu' : 'Enter your password'}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-zinc-100">
            {currentLang === 'vi' ? 'Xác nhận mật khẩu' : 'Confirm Password'}
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:border-red-500"
            placeholder={currentLang === 'vi' ? 'Xác nhận mật khẩu' : 'Confirm your password'}
            required
          />
        </div>

        <div className="flex items-start">
          <input type="checkbox" className="mr-3 mt-1 rounded" required />
          <span className="text-zinc-400 text-sm">
            {currentLang === 'vi' 
              ? 'Tôi đồng ý với ' 
              : 'I agree to the '
            }
            <Link href="/terms" className="text-red-400 hover:text-red-300">
              {currentLang === 'vi' ? 'điều khoản sử dụng' : 'terms of service'}
            </Link>
            {currentLang === 'vi' ? ' và ' : ' and '}
            <Link href="/privacy" className="text-red-400 hover:text-red-300">
              {currentLang === 'vi' ? 'chính sách bảo mật' : 'privacy policy'}
            </Link>
          </span>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-zinc-100 font-bold py-3"
        >
          {currentLang === 'vi' ? 'TẠO TÀI KHOẢN' : 'CREATE ACCOUNT'}
        </Button>
      </form>
    )
}