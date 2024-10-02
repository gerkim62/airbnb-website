
import { Car, Dumbbell, Waves, Wifi, Coffee, Book, MapPin, Phone, Mail, Users, Building, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="#">
          <Book className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">Student Haven STL</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#gallery">
            Gallery
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Luxury Student Apartments in St. Louis
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience premium living with free parking, gym, and pool. Perfect for students at Washington University and Saint Louis University.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 py-2 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#contact"
                >
                  Book Now
                </Link>
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#gallery"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Student Haven STL</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Student Haven STL is dedicated to providing premium living spaces for students in St. Louis. We understand the unique needs of students and have designed our apartments to create the perfect balance between comfort, convenience, and academic success.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our mission is to offer a supportive living environment that enhances the college experience. With our prime location near major universities and our range of amenities, we're more than just a place to live – we're a community where students can thrive.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden">
                  <img
                    alt="Student Haven STL building"
                    className="absolute inset-0 w-full h-full object-cover"
                    height="300"
                    src="/placeholder.svg?height=300&width=300"
                    width="300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Users className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Student-Focused</h3>
                <p className="text-gray-500">Tailored living spaces designed with students in mind</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Building className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Prime Location</h3>
                <p className="text-gray-500">Conveniently located near major universities and city attractions</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <GraduationCap className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Community Focus</h3>
                <p className="text-gray-500">Fostering a supportive and engaging student community</p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Premium Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <Car className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Free Parking</h3>
                  <p className="text-gray-600">Ample parking space for all residents, ensuring convenience and security for your vehicle.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Dumbbell className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Free Gym</h3>
                  <p className="text-gray-600">State-of-the-art fitness center equipped with modern exercise machines and free weights.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Waves className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Swimming Pool</h3>
                  <p className="text-gray-600">Relax and unwind in our refreshing pool, perfect for leisure and exercise.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Wifi className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Free Wi-Fi</h3>
                  <p className="text-gray-600">High-speed internet throughout the complex to keep you connected for study and leisure.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Coffee className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Study Areas</h3>
                  <p className="text-gray-600">Quiet spaces designed for focused learning and group study sessions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Prime Location</h3>
                  <p className="text-gray-600">Close to universities, shopping centers, and public transportation for your convenience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Explore Our Spaces</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img
                alt="Student apartment living room"
                className="aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                height="300"
                src="/placeholder.svg?height=300&width=400"
                width="400"
              />
              <img
                alt="Modern bedroom"
                className="aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                height="300"
                src="/placeholder.svg?height=300&width=400"
                width="400"
              />
              <img
                alt="Fully equipped kitchen"
                className="aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                height="300"
                src="/placeholder.svg?height=300&width=400"
                width="400"
              />
              <img
                alt="Fitness center"
                className="aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                height="300"
                src="/placeholder.svg?height=300&width=400"
                width="400"
              />
              <img
                alt="Swimming pool"
                className="aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                height="300"
                src="/placeholder.svg?height=300&width=400"
                width="400"
              />
              <img
                alt="Study lounge"
                className="aspect-video object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                height="300"
                src="/placeholder.svg?height=300&width=400"
                width="400"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg">
                <MapPin className="h-10 w-10 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Address</h3>
                <p className="text-gray-600">123 Student Street, St. Louis, MO 63101</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg">
                <Phone className="h-10 w-10 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-600">(314) 555-1234</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg">
                <Mail className="h-10 w-10 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600">info@studenthavenstl.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 Student Haven St. Louis. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <Link className="text-sm hover:text-blue-400 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:text-blue-400 transition-colors" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}