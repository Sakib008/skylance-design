import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Award, Target, Heart, ArrowRight, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
              Our Story
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skylence Design
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a passionate team of designers and developers dedicated to creating exceptional web applications
              that drive business success through innovation and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
                Founded in 2019
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900">Our Journey</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2019, Skylence Design emerged from a simple belief: every business deserves a digital
                  presence that truly represents their vision and drives growth.
                </p>
                <p>
                  What started as a small team of passionate creators has grown into a full-service web agency, but
                  we've never lost sight of our core mission - delivering exceptional results through innovative design
                  and cutting-edge development.
                </p>
                <p>
                  Today, we're proud to have helped over 150 businesses transform their digital presence and achieve
                  their goals through beautiful, functional web applications.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-600 mb-1">150+</div>
                  <div className="text-gray-600 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">98%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Our%20Team"
                  alt="Our team at work"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-xl shadow-lg transform rotate-6">
                <div className="bg-white p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <div className="text-xs text-slate-900 font-medium">Award Winning</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white p-1 rounded-xl shadow-lg transform -rotate-6">
                <div className="bg-slate-900 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="text-xs text-white font-medium">5+ Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 -mt-24 -ml-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mb-24 -mr-24 w-64 h-64 bg-pink-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Our Core Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every pixel, every line of code, and every client interaction.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Collaboration</h3>
              <p className="text-gray-600">
                Your success is our success. We work closely with you as partners, not just vendors.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of trends and technologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Passion</h3>
              <p className="text-gray-600">
                We love what we do, and it shows in the quality and care we put into every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
              Meet The Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">The Minds Behind Magic</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind Skylence Design who make the magic happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Creative Director",
                image: "/placeholder.svg?height=400&width=400&text=Alex",
              },
              { name: "Sarah Chen", role: "Lead Developer", image: "/placeholder.svg?height=400&width=400&text=Sarah" },
              { name: "Mike Rodriguez", role: "UX Designer", image: "/placeholder.svg?height=400&width=400&text=Mike" },
            ].map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="relative z-10 w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{member.name}</h3>
                <p className="text-purple-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
              Ready to Collaborate?
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's discuss your project and see how we can help bring your
              vision to life.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
