import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LoginFormProps {
  currentLang: string
}

export default function LoginForm({ currentLang }: LoginFormProps) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)
  }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-100">
                  {currentLang === 'vi' ? 'Email' : 'Email'}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:border-cyan-500"
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
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:border-cyan-500"
                  placeholder={currentLang === 'vi' ? 'Nhập mật khẩu' : 'Enter your password'}
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded" />
                  <span className="text-zinc-400">
                    {currentLang === 'vi' ? 'Ghi nhớ đăng nhập' : 'Remember me'}
                  </span>
                </label>
                <Link href="/forgot-password" className="text-cyan-400 hover:text-cyan-300">
                  {currentLang === 'vi' ? 'Quên mật khẩu?' : 'Forgot password?'}
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-zinc-100 font-bold py-3"
              >
                {currentLang === 'vi' ? 'ĐĂNG NHẬP' : 'LOGIN'}
              </Button>
            </form>
    )
}