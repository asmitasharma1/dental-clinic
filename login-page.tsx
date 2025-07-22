"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { User, Lock, Mail, ArrowRight, Sparkles, Heart, Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-teal-100">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Image
                                src="/images/logo.jpeg"
                                alt="Smile by Dr. Kareen Logo"
                                width={120}
                                height={60}
                                className="h-12 w-auto"
                            />
                            <Link
                                href="/#hero"
                                className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group"
                            >
                                ← Back to Home
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            </Link>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link
                                href="/#about"
                                className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group"
                            >
                                About Us
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            </Link>
                            <Link
                                href="/#services"
                                className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group"
                            >
                                Services
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            </Link>
                            <Link
                                href="/#contact"
                                className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group"
                            >
                                Contact Us
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
                            </Link>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                            >
                                <ArrowRight className="h-4 w-4 mr-2" />
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Login Section */}
            <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 min-h-screen flex items-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-8 h-10 bg-white/30 rounded-t-full rounded-b-sm transform rotate-12 blur-sm animate-pulse animate-float"></div>
                <div className="absolute top-32 right-20 w-6 h-8 bg-teal-200/40 rounded-t-full rounded-b-sm transform -rotate-45 blur-sm animate-pulse delay-1000 animate-float"></div>
                <div className="absolute bottom-32 left-1/4 w-10 h-12 bg-blue-200/30 rounded-t-full rounded-b-sm transform rotate-45 blur-sm animate-pulse delay-2000 animate-float"></div>
                <div className="absolute top-1/4 right-1/4 animate-rotate-slow">
                    <Sparkles className="h-8 w-8 text-teal-300/50" />
                </div>
                <div className="absolute bottom-1/3 left-16 animate-float delay-1500">
                    <Heart className="h-6 w-6 text-pink-300/60" />
                </div>
                <div className="absolute top-20 left-1/3 w-24 h-3 bg-gradient-to-r from-teal-300/30 to-blue-300/30 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-40 right-1/3 w-32 h-4 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full animate-pulse delay-1500"></div>

                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Login Form */}
                        <div className="space-y-8 animate-fade-in-left">
                            <Card className="bg-white/80 backdrop-blur-sm border-0 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                                <CardContent className="p-0">
                                    <div className="space-y-6">
                                        <div className="text-center space-y-4">
                                            <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mx-auto flex items-center justify-center mb-4">
                                                <User className="h-8 w-8 text-teal-600" />
                                            </div>
                                            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent">
                                                Book Your Appointment
                                            </h1>
                                            <p className="text-gray-600">Sign in to schedule your dental visit</p>
                                        </div>

                                        <form className="space-y-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-gray-700 font-medium">
                                                    Email Address
                                                </Label>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        className="pl-10 rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="password" className="text-gray-700 font-medium">
                                                    Password
                                                </Label>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                                    <Input
                                                        id="password"
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="Enter your password"
                                                        className="pl-10 pr-10 rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                    >
                                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="remember" className="border-gray-300" />
                                                    <Label htmlFor="remember" className="text-sm text-gray-600">
                                                        Remember me
                                                    </Label>
                                                </div>
                                                <Link
                                                    href="/forgot-password"
                                                    className="text-sm text-teal-600 hover:text-teal-700 font-medium transition-colors"
                                                >
                                                    Forgot password?
                                                </Link>
                                            </div>

                                            <Button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                                Sign In
                                            </Button>

                                            <div className="relative">
                                                <Separator className="bg-gray-200" />
                                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
                                                    Or continue with
                                                </span>
                                            </div>

                                            <Button
                                                variant="outline"
                                                className="w-full border-gray-200 hover:bg-gray-50 py-4 rounded-xl text-lg font-medium transition-all duration-300 bg-transparent"
                                            >
                                                <Image
                                                    src="/placeholder.svg?height=20&width=20&text=G"
                                                    alt="Google"
                                                    width={20}
                                                    height={20}
                                                    className="mr-2"
                                                />
                                                Sign in with Google
                                            </Button>

                                            <div className="text-center">
                                                <p className="text-gray-600">
                                                    Don't have an account?{" "}
                                                    <Link
                                                        href="/signup"
                                                        className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
                                                    >
                                                        Sign up here
                                                    </Link>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Side - Decorative */}
                        <div className="relative animate-fade-in-right delay-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-3xl blur-2xl transform rotate-3 animate-pulse"></div>
                            <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-0 p-12 rounded-3xl shadow-2xl relative z-10">
                                <CardContent className="p-0 text-center space-y-8">
                                    <div className="space-y-4">
                                        <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mx-auto flex items-center justify-center">
                                            <Sparkles className="h-12 w-12 text-teal-600" />
                                        </div>
                                        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                                            Schedule Your Visit
                                        </h2>
                                        <p className="text-gray-600 text-lg">
                                            Sign in to book appointments, view your treatment history, and manage your dental care.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-white/50 p-4 rounded-2xl">
                                            <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mx-auto flex items-center justify-center mb-3">
                                                <Heart className="h-6 w-6 text-teal-600" />
                                            </div>
                                            <p className="text-sm font-medium text-gray-700">Easy Booking</p>
                                        </div>
                                        <div className="bg-white/50 p-4 rounded-2xl">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto flex items-center justify-center mb-3">
                                                <User className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <p className="text-sm font-medium text-gray-700">Track Visits</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
