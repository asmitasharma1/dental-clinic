"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Phone,
  Mail,
  MapPin,
  Quote,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
  Sparkles,
  Heart,
  Clock,
  Shield,
  Award,
  Users,
  Star,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const testimonials = [
  {
    quote:
      "Dr. Kareen and her team provided exceptional care during my dental implant procedure. The results exceeded my expectations!",
    name: "Sarah Johnson",
    service: "Dental Implants",
  },
  {
    quote: "My children love coming here! The pediatric dentistry team makes every visit comfortable and fun for kids.",
    name: "Michael Chen",
    service: "Pediatric Dentistry",
  },
  {
    quote:
      "The restorative work done on my teeth was amazing. I can smile confidently again thanks to Dr. Kareen's expertise.",
    name: "Emma Rodriguez",
    service: "Restorative Dentistry",
  },
]

export default function DentalClinicWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-teal-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="#hero">
                <Image
                  src="/images/logo.png"
                  alt="Smile by Dr. Kareen Logo"
                  width={150}
                  height={80}
                  className="h-12 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#about"
                className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group"
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/login" className="hidden md:block">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Get Started
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">
                  About Us
                </Link>
                <Link href="#services" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Services
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Contact Us
                </Link>
                <Link href="/login">
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white">
                    Get Started
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-gradient-to-br from-teal-50 via-white to-blue-50 py-20 min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-8 h-10 bg-white/30 rounded-t-full rounded-b-sm transform rotate-12 blur-sm animate-pulse"></div>
        <div className="absolute top-32 right-20 w-6 h-8 bg-teal-200/40 rounded-t-full rounded-b-sm transform -rotate-45 blur-sm animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-12 bg-blue-200/30 rounded-t-full rounded-b-sm transform rotate-45 blur-sm animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 animate-spin" style={{ animationDuration: "8s" }}>
          <Sparkles className="h-8 w-8 text-teal-300/40" />
        </div>
        <div className="absolute bottom-1/3 left-16">
          <Heart className="h-6 w-6 text-pink-300/60 animate-pulse" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">WELCOME TO</h1>
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent leading-tight">
                  Smile By Dr. Kareen
                </h2>
              </div>

              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                With our team of exceptional dental surgeons, we promise to provide the best service with cutting-edge
                technology and personalized care for every patient.
              </p>

              <div className="flex justify-center">
                <Link href="#booking">
                  <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Book An Appointment
                  </Button>
                </Link>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 text-gray-700">
                  <Clock className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="font-semibold">Open 7 Days a Week</p>
                    <p className="text-sm">Monday - Sunday: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-3xl blur-2xl transform rotate-3 animate-pulse"></div>
              <Image
                src="/images/dental-hero.jpeg"
                alt="Professional dental care"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care with state-of-the-art technology and personalized treatment plans
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto mt-8"></div>
          </div>

          {/* Main Services */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-0 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">Basic Dental Care</h3>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Image src="/images/dental-instruments.avif" alt="Dental care" width={40} height={40} />
                  </div>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
                    <span>Professional Teeth Cleaning & Scaling</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
                    <span>Dental Fillings & Cavity Treatment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
                    <span>Oral Health Consultation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-100 border-0 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">Aesthetic Care</h3>
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/images/dental-instruments.avif"
                      alt="Aesthetic care"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"></div>
                    <span>Premium Porcelain Veneers</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"></div>
                    <span>Professional Teeth Whitening</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"></div>
                    <span>Invisalign Clear Aligners</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            <Card className="bg-gradient-to-br from-teal-100 to-teal-200 border-0 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Users className="h-8 w-8 text-teal-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">500+</h3>
                <p className="text-gray-600">Happy Patients</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-0 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-0 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">100%</h3>
                <p className="text-gray-600">Safe Procedures</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-pink-100 to-pink-200 border-0 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Star className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">4.9/5</h3>
                <p className="text-gray-600">Patient Rating</p>
              </CardContent>
            </Card>
          </div>

          {/* Specialized Services with Testimonials */}
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-50 to-white border-0 p-6 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image src="/images/dental-instruments.avif" alt="Restorative" width={32} height={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Restorative Dentistry</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-white border-0 p-6 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image src="/images/dental-instruments.avif" alt="Pediatric" width={32} height={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Pediatric Dentistry</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-white border-0 p-6 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image src="/images/dental-instruments.avif" alt="Implants" width={32} height={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dental Implants</h3>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Section */}
          <div className="mt-20">
            <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
              <CardContent className="p-0 text-center">
                <Quote className="h-12 w-12 mx-auto mb-6 opacity-80" />
                <p className="text-xl mb-6 leading-relaxed">{testimonials[currentTestimonial].quote}</p>
                <div className="space-y-2">
                  <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="text-teal-100">{testimonials[currentTestimonial].service}</p>
                </div>
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? "bg-white" : "bg-white/40"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent">
                  About Us
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Led by Dr. Kareen Rana, Smile by Dr. Kareen Dental Clinic in Lalitpur is dedicated to providing
                  advanced dental solutions with a personal touch.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Care</h3>
                    <p className="text-gray-600">
                      Our experienced team combines expertise with a patient-centered approach to ensure your comfort
                      and satisfaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Technology</h3>
                    <p className="text-gray-600">
                      We use state-of-the-art equipment and the latest techniques to provide the best possible dental
                      care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-3xl blur-2xl transform -rotate-6"></div>
              <Image
                src="/images/kareen.avif"
                alt="Dr. Kareen"
                width={500}
                height={600}
                className="rounded-3xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent mb-6">
              Our Mission
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-0 p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-0">
                <div className="space-y-6">
                  <p className="text-teal-600 text-lg font-medium">Our Mission</p>
                  <h3 className="text-4xl font-bold text-gray-900">
                    Help you achieve a{" "}
                    <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                      healthy, confident smile
                    </span>{" "}
                    that lasts a lifetime
                  </h3>
                  <p className="text-gray-600 text-lg">
                    We believe everyone deserves a beautiful smile. Our comprehensive approach focuses on prevention,
                    treatment, and long-term oral health.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800">Patient Care</p>
                  </div>
                </div>
                <div className="w-full h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                    <p className="text-sm font-semibold text-gray-800">Safety First</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="w-full h-20 bg-gradient-to-br from-purple-100 to-pink-200 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="h-6 w-6 text-purple-600 mx-auto mb-1" />
                    <p className="text-sm font-semibold text-gray-800">Excellence</p>
                  </div>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-teal-100 to-blue-200 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800">Compassion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent mb-6">
              Book Your Appointment
            </h2>
            <p className="text-xl text-gray-600">
              Schedule your visit today and take the first step towards a healthier smile
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="bg-white border-0 p-8 rounded-3xl shadow-2xl">
              <CardContent className="p-0">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent mb-8">
                  Book Online Now
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">
                        First name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">
                        Last name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">Preferred Date and Time</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="date"
                        className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                      />
                      <Input
                        type="time"
                        className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="services" className="text-gray-700 font-medium">
                      Service Needed
                    </Label>
                    <select
                      id="services"
                      className="w-full rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12 px-3"
                    >
                      <option value="">Select a service</option>
                      <option value="cleaning">Teeth Cleaning</option>
                      <option value="filling">Dental Filling</option>
                      <option value="whitening">Teeth Whitening</option>
                      <option value="implant">Dental Implant</option>
                    </select>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1234567890123!2d85.31234567890123!3d27.67890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPulchowk%20Damkal%2C%20Lalitpur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[600px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer
        id="contact"
        className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-blue-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <Image
                  src="/placeholder.svg?height=60&width=120&text=Smile+Logo"
                  alt="Smile by Dr. Kareen Logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Your trusted dental care partner in Lalitpur. We're committed to providing exceptional dental services
                with a personal touch.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent border-gray-600 text-gray-300 hover:bg-teal-600 hover:border-teal-600 hover:text-white transition-all duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent border-gray-600 text-gray-300 hover:bg-teal-600 hover:border-teal-600 hover:text-white transition-all duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent border-gray-600 text-gray-300 hover:bg-teal-600 hover:border-teal-600 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <nav className="space-y-3">
                <Link href="#about" className="block text-gray-300 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
                <Link href="#services" className="block text-gray-300 hover:text-teal-400 transition-colors">
                  Our Services
                </Link>
                <Link href="#booking" className="block text-gray-300 hover:text-teal-400 transition-colors">
                  Book Appointment
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-300">smilebydrkareen@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-300">985-1359775</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-teal-400 mt-1" />
                  <span className="text-gray-300">Pulchowk Damkal, Lalitpur, Nepal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-teal-400" />
                  <span className="text-gray-300">Mon-Sun: 9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-300">Subscribe to our newsletter for dental tips and updates.</p>
              </div>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-xl border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500 h-12"
                  />
                  <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Subscribe
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter-consent" className="border-gray-600" />
                  <Label htmlFor="newsletter-consent" className="text-sm text-gray-400">
                    I agree to receive newsletters and promotional emails.
                  </Label>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">© 2024 Smile by Dr. Kareen. All rights reserved.</p>
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
