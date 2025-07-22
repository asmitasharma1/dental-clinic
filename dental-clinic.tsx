import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Phone,
  Mail,
  MapPin,
  Quote,
  Facebook,
  Twitter,
  Linkedin,
  User,
  ArrowRight,
  Sparkles,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DentalClinicWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-teal-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="#hero">
                <Image
                  src="/images/logo.jpeg"
                  alt="Smile by Dr. Kareen Logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto cursor-pointer"
                />
              </Link>
            </div>
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
              <div className="flex gap-2">
                <Link href="/login">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Get Started
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hidden md:flex items-center space-x-2 hover:bg-teal-50 transition-all duration-300 rounded-full"
                  >
                    <User className="h-4 w-4" />
                    <span>Log In</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 py-16 min-h-screen flex items-start pt-28 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-8 h-10 bg-white/30 rounded-t-full rounded-b-sm transform rotate-12 blur-sm animate-pulse animate-float"></div>
        <div className="absolute top-32 right-20 w-6 h-8 bg-teal-200/40 rounded-t-full rounded-b-sm transform -rotate-45 blur-sm animate-pulse delay-1000 animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-12 bg-blue-200/30 rounded-t-full rounded-b-sm transform rotate-45 blur-sm animate-pulse delay-2000 animate-float"></div>

        <div className="absolute bottom-1/4 right-1/3 animate-spin" style={{ animationDuration: '8s' }}>
          <Sparkles className="h-8 w-8 text-teal-300/40" />
        </div>
        <div className="absolute bottom-1/3 left-16 animate-float delay-1500">
          <Heart className="h-6 w-6 text-pink-300/60" />
        </div>
        <div className="absolute top-20 left-1/3 w-24 h-3 bg-gradient-to-r from-teal-300/30 to-blue-300/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-32 h-4 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full animate-pulse delay-1500"></div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 mt-7">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 animate-fade-in-up">WELCOME TO</h1>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent animate-fade-in-up delay-300">
                  Smile By Dr. Kareen
                </h2>
              </div>
              <p className="text-lg text-gray-600 max-w-lg animate-fade-in-up delay-500">
                With Our Team of Exceptional Dental Surgeons, We promise to provide the best service as we can!
              </p>
              <div className="mt-8">
                <Link href="/login">
                  <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-700 hover:scale-105">
                    Book An Appointment
                  </Button>
                </Link>
              </div>
              <div className="text-sm text-gray-500 mt-10 animate-fade-in-up delay-1000 space-y-2">
                <p>We are open 7 days a week</p>
                <p>Saturday - Sunday</p>
              </div>
            </div>
            <div className="relative animate-fade-in-right delay-500 mt-10">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-3xl blur-2xl transform rotate-3 animate-pulse"></div>
              <Image
                src="/images/dental-hero.jpeg"
                alt="Professional dental tools and equipment"
                width={600}
                height={450}
                className="rounded-3xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-12 h-15 bg-teal-100/50 rounded-t-full rounded-b-sm transform -rotate-12 animate-pulse delay-500 animate-float"></div>
        <div className="absolute bottom-32 left-16 w-8 h-10 bg-blue-100/50 rounded-t-full rounded-b-sm transform rotate-45 animate-pulse delay-1500 animate-float"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8 animate-fade-in-up">
              Our Service
            </h2>
            <div className="w-24 h-3 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto opacity-60 animate-fade-in-up delay-300"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Basic Dental Care */}
            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-0 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-500">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">Basic Dental Care</h3>
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/images/dental-instruments.avif"
                      alt="Dental probe tool"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
                    <span>Scaling.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
                    <span>Filing.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
                    <span>Brushing.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            {/* Aesthetic Care */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-100 border-0 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-700">
              <CardContent className="p-0">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900">Aesthetic Care</h3>
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-16 bg-gradient-to-b from-white to-gray-200 rounded-lg shadow-inner relative">
                      <div className="absolute inset-1 bg-gradient-to-b from-gray-50 to-gray-100 rounded-md"></div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"></div>
                    <span>Porcelain Veneers.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"></div>
                    <span>Teeth Whitening.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"></div>
                    <span>Invisalign.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          {/* Stats */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-gray-100 to-gray-200 border-0 p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-900">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent mb-2">
                  Skilled
                </h3>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                  Dentists
                </h3>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-100 to-gray-200 border-0 p-8 rounded-3xl text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-1000">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent mb-2">
                  Satisfied
                </h3>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                  Patients
                </h3>
              </CardContent>
            </Card>
          </div>
          {/* Specialized Services */}
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-50 to-white border-0 p-6 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-1300">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-16 bg-gradient-to-b from-white to-gray-200 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Restorative Dentistry</h3>
                </div>
                <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-4 rounded-2xl">
                  <Quote className="h-6 w-6 mb-2" />
                  <p className="text-sm mb-3">
                    This is your Testimonial quote. Give your customers the stage to tell the world how great you are!
                  </p>
                  <p className="font-semibold">Frankie B.</p>
                </Card>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-50 to-white border-0 p-6 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-1500">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-16 bg-gradient-to-b from-white to-gray-200 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Pediatric Dentistry</h3>
                </div>
                <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-4 rounded-2xl">
                  <Quote className="h-6 w-6 mb-2" />
                  <p className="text-sm mb-3">
                    This is your Testimonial quote. Give your customers the stage to tell the world how great you are!
                  </p>
                  <p className="font-semibold">Jesse N.</p>
                </Card>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-50 to-white border-0 p-6 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 group animate-fade-in-up delay-1700">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-16 bg-gradient-to-b from-white to-gray-200 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dental Implants</h3>
                </div>
                <Card className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-4 rounded-2xl">
                  <Quote className="h-6 w-6 mb-2" />
                  <p className="text-sm mb-3">
                    This is your Testimonial quote. Give your customers the stage to tell the world how great you are!
                  </p>
                  <p className="font-semibold">Jamie L.</p>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="servicesToAbout" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#f9fafb" />
                <stop offset="100%" stopColor="#f0fdfa" />
              </linearGradient>
            </defs>
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="url(#servicesToAbout)"
            ></path>
          </svg>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden">
        {/* Tooth decorations */}
        <div className="absolute top-16 left-20 w-10 h-12 bg-white/40 rounded-t-full rounded-b-sm transform rotate-12 animate-pulse delay-1000 animate-float"></div>
        <div className="absolute bottom-24 right-24 w-8 h-10 bg-teal-200/40 rounded-t-full rounded-b-sm transform -rotate-30 animate-pulse delay-2000 animate-float"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent">
                About Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Led by Dr. Kareen Rana, Smile by Dr. Kareen Dental Clinic in Lalitpur is dedicated to providing advanced
                dental solutions. With a passion for creating beautiful, healthy smiles, our experienced team combines
                expertise with a patient-centered approach to ensure your comfort and satisfaction.
              </p>
            </div>
            <div className="relative animate-fade-in-right delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-3xl blur-2xl transform -rotate-6 animate-pulse"></div>
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
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="aboutToGoals" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0fdfa" />
                <stop offset="50%" stopColor="#f9fafb" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="url(#aboutToGoals)"
            ></path>
          </svg>
        </div>
      </section>
      <section className="py-32 bg-white relative">
        <div className="absolute top-20 left-1/4 w-32 h-4 bg-gradient-to-r from-teal-300/30 to-blue-300/30 rounded-full transform rotate-12 animate-pulse delay-500 animate-float"></div>
        <div className="absolute bottom-32 right-1/4 w-24 h-3 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full transform -rotate-12 animate-pulse delay-1500 animate-float"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent mb-8 animate-fade-in-up">
              Our Goals
            </h2>
            <div className="w-32 h-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mx-auto opacity-60 animate-fade-in-up delay-300"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-0 p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-left delay-500">
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
                </div>
              </CardContent>
            </Card>
            <div className="relative animate-fade-in-right delay-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="w-full h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"></div>
                  <div className="w-full h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 delay-100"></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="w-full h-20 bg-gradient-to-br from-purple-100 to-pink-200 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 delay-200"></div>
                  <div className="w-full h-32 bg-gradient-to-br from-teal-100 to-blue-200 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="goalsToBooking" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#f9fafb" />
                <stop offset="100%" stopColor="#f0fdfa" />
              </linearGradient>
            </defs>
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="url(#goalsToBooking)"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="url(#goalsToBooking)"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="url(#goalsToBooking)"
            ></path>
          </svg>
        </div>
      </section>
      {/* Booking Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-teal-50 relative overflow-hidden">
        <div className="absolute top-32 right-16 w-6 h-8 bg-white/50 rounded-t-full rounded-b-sm transform rotate-45 animate-pulse delay-1000 animate-float"></div>
        <div className="absolute bottom-40 left-12 w-8 h-10 bg-teal-200/40 rounded-t-full rounded-b-sm transform -rotate-30 animate-pulse delay-2000 animate-float"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Book Your Appointment
            </h2>
            <div className="w-28 h-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mx-auto opacity-60 animate-fade-in-up delay-300"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="bg-white border-0 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in-left delay-500">
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
                    <Label className="text-gray-700 font-medium">Date and time</Label>
                    <div className="grid grid-cols-4 gap-2">
                      <Input
                        placeholder="Month"
                        className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                      />
                      <Input
                        placeholder="Day"
                        className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                      />
                      <Input
                        placeholder="Year"
                        className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                      />
                      <Input
                        placeholder="Time"
                        className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="services" className="text-gray-700 font-medium">
                      Services
                    </Label>
                    <Input
                      id="services"
                      placeholder="Select service"
                      className="rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-2xl animate-fade-in-right delay-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1234567890123!2d85.31234567890123!3d27.67890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPulchowk%20Damkal%2C%20Lalitpur%2C%20Nepal!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[500px]"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="bookingToFooter" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f0fdfa" />
                <stop offset="50%" stopColor="#f9fafb" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="url(#bookingToFooter)"
            ></path>
          </svg>
        </div>
      </section>
      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-br from-white to-gray-50 py-20 border-t border-gray-100 relative">
        <div className="absolute top-10 left-1/3 w-16 h-2 bg-gradient-to-r from-teal-300/40 to-blue-300/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-12 h-2 bg-gradient-to-r from-purple-300/40 to-pink-300/40 rounded-full animate-pulse delay-2000"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in-left">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/logo.jpeg"
                  alt="Smile by Dr. Kareen Logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <nav className="space-y-4">
                <Link href="#about" className="block text-gray-700 hover:text-teal-600 transition-colors font-medium">
                  About Us
                </Link>
                <Link
                  href="#services"
                  className="block bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent hover:from-purple-700 hover:to-purple-800 transition-all font-medium"
                >
                  Services
                </Link>
                <Link href="#contact" className="block text-gray-700 hover:text-teal-600 transition-colors font-medium">
                  Contact Us
                </Link>
              </nav>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-teal-600" />
                  <span>smilebydrkareen@gmail.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-teal-600" />
                  <span>Tel: 985-1359775</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-teal-600" />
                  <span>Pulchowk Damkal, Lalitpur, Nepal</span>
                </p>
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent border-gray-300 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent border-gray-300 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-transparent border-gray-300 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-6 animate-fade-in-right delay-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent">
                Stay Up to Date
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="newsletter" className="text-gray-700 font-medium">
                    Email *
                  </Label>
                  <div className="flex space-x-2">
                    <Input
                      id="newsletter"
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 rounded-xl border-gray-200 focus:border-teal-500 focus:ring-teal-500 h-12"
                    />
                    <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      Submit
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="subscribe" className="border-gray-300" />
                  <Label htmlFor="subscribe" className="text-sm text-gray-600">
                    Yes, subscribe me to your newsletter.
                  </Label>
                </div>
              </div>
              <Separator className="bg-gradient-to-r from-gray-200 to-teal-200" />
              <div className="space-y-2 text-sm text-gray-600">
                <Link href="#" className="block hover:text-teal-600 transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="#" className="block hover:text-teal-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="block hover:text-teal-600 transition-colors">
                  Refund Policy
                </Link>
                <Link href="#" className="block hover:text-teal-600 transition-colors">
                  Accessibility Statement
                </Link>
              </div>
              <p className="text-sm text-gray-500">© 2024 by Smile by Dr. Kareen. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
