'use client';

import { Globe, Menu, X, User, Sun, Moon } from 'lucide-react';
import {useState} from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
    const [currentLang, setCurrentLang] = useState('vi');
    const pathname = usePathname();

    const navItems = [
        { name: 'Trang chủ', path: '/', nameEn: 'Home' },
        { name: 'Cửa hàng', path: '/shop', nameEn: 'Shop' },
        { name: 'Gói tập luyện', path: '/packages', nameEn: 'Packages' },
        { name: 'Về chúng tôi', path: '/about', nameEn: 'About Us' },
    ];

    const toggleLanguage = () => {
        setCurrentLang(currentLang === 'vi' ? 'en' : 'vi');
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 dark:bg-black/95 backdrop-blur-sm
            border-b border-zinc-800 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* TronFit Logo - New Focused Design */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative group">
                            {/* Logo container */}
                            <div className="relative bg-zinc-900/90 dark:bg-zinc-900/90 backdrop-blur-sm p-3 rounded-xl border border-zinc-700/50 dark:border-zinc-700/50 group-hover:border-cyan-400/50 transition-all duration-300">
                                {/* New TronFit Logo - Gym, Schedule, Discipline Focus */}
                                <svg width={36} height={36} viewBox="0 0 48 48" fill="none" className="text-white dark:text-white">
                                    {/* Central Dumbbell (Gym) */}
                                    <rect x="18" y="22" width="12" height="4" rx="2" fill="url(#logoGradient)" />
                                    <rect x="14" y="20" width="4" height="8" rx="2" fill="url(#logoGradient)" />
                                    <rect x="30" y="20" width="4" height="8" rx="2" fill="url(#logoGradient)" />

                                    {/* Schedule Grid (Top) */}
                                    <rect x="20" y="8" width="8" height="8" rx="1" fill="none" stroke="#00f5ff" strokeWidth="1.5" />
                                    <line x1="22" y1="10" x2="26" y2="10" stroke="#00f5ff" strokeWidth="1" />
                                    <line x1="22" y1="12" x2="26" y2="12" stroke="#00f5ff" strokeWidth="1" />
                                    <line x1="22" y1="14" x2="24" y2="14" stroke="#00f5ff" strokeWidth="1" />

                                    {/* Discipline Arrows (Pointing Up - Progress) */}
                                    <path d="M12 36 L16 32 L12 28" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    <path d="M32 36 L36 32 L32 28" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                                    {/* Focus Rings (Discipline/Target) */}
                                    <circle cx="12" cy="12" r="2" fill="none" stroke="#ff0844" strokeWidth="1.5" opacity="0.8" />
                                    <circle cx="12" cy="12" r="1" fill="#ff0844" opacity="0.8" />

                                    <circle cx="36" cy="36" r="2" fill="none" stroke="#ff0844" strokeWidth="1.5" opacity="0.8" />
                                    <circle cx="36" cy="36" r="1" fill="#ff0844" opacity="0.8" />

                                    {/* Define gradients */}
                                    <defs>
                                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#00f5ff" />
                                            <stop offset="50%" stopColor="#3b82f6" />
                                            <stop offset="100%" stopColor="#8b5cf6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        {/* TronFit Text */}
                        <div className="flex flex-col">
                          <span className="text-2xl font-black tracking-tight leading-none bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                            TRONFIT
                          </span>
                            <span className="text-[9px] text-gray-500 dark:text-gray-500 font-medium tracking-wider mt-0.5">
                                GYM • SCHEDULE • DISCIPLINE
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                                    pathname === item.path
                                        ? 'text-cyan-400'
                                        : 'text-gray-300 dark:text-gray-300'
                                }`}
                            >
                                {currentLang === 'vi' ? item.name : item.nameEn}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Theme Toggle
                        <div className="flex items-center space-x-2">
                        <Sun size={16} className="text-gray-400 dark:text-gray-400" />
                        <Switch 
                            checked={isDark}
                            onCheckedChange={toggleTheme}
                            className="data-[state=checked]:bg-purple-600"
                        />
                        <Moon size={16} className="text-gray-400 dark:text-gray-400" />
                        </div> */}

                        {/* Language Toggle */}
                        <button
                        onClick={toggleLanguage}
                        className="flex items-center space-x-1 text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
                        >
                        <Globe size={18} />
                        <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
                        </button>

                        {/* Auth Buttons */}
                        <Link
                        href="/login"
                        className="flex items-center space-x-1 text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
                        >
                        <User size={18} />
                        <span className="text-sm font-medium">
                            {currentLang === 'vi' ? 'Đăng nhập' : 'Login'}
                        </span>
                        </Link>

                        <Link
                        href="/register"
                        className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-red-700 hover:to-red-600 transition-all duration-300"
                        >
                        {currentLang === 'vi' ? 'Đăng ký' : 'Sign Up'}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}