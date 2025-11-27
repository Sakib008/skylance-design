import Image from "next/image"
import { Users, Award, Target, Star } from "lucide-react"
import { Heart } from 'lucide-react'
import { Badge, CTAButton, BackgroundElements, FloatingElement } from "@/components/ui"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        {/* Background elements */}
        <BackgroundElements variant="hero" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="default" icon={<span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>}>
              Our Story
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skylence Design
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re a passionate team of designers and developers dedicated to creating exceptional web applications
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
                  we&apos;ve never lost sight of our core mission - delivering exceptional results through innovative design
                  and cutting-edge development.
                </p>
                <p>
                  Today, we&apos;re proud to have helped over 150 businesses transform their digital presence and achieve
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
                  src="https://images.pexels.com/photos/6340665/pexels-photo-6340665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Our team at work"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              {/* Floating elements */}
              <FloatingElement
                icon={<Star className="h-4 w-4 text-yellow-400" />}
                text="Award Winning"
                position="top-right"
              />

              <FloatingElement
                icon={<div className="w-3 h-3 rounded-full bg-green-500"></div>}
                text="5+ Years"
                position="bottom-left"
              />
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
            

            <div className="group text-center p-8 bg-white  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
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
                name: "Mohammad Sakib",
                role: "Creative Director & Founder",
                image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=800",
                bio: "Passionate about creating exceptional user experiences and leading innovative design solutions."
              },
              { 
                name: "Sarah Chen", 
                role: "Lead Developer", 
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
                bio: "Full-stack developer with expertise in React, Next.js, and modern web technologies."
              },
              { 
                name: "Mike Rodriguez", 
                role: "UX Designer", 
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
                bio: "User experience specialist focused on creating intuitive and accessible designs."
              },
            ].map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="relative z-10 w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
        <BackgroundElements variant="hero" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="white" icon={<span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>}>
              Ready to Collaborate?
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Let&apos;s Work Together</h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let&apos;s discuss your project and see how we can help bring your
              vision to life.
            </p>
            <CTAButton href="/contact" variant="white" size="lg">
              Start Your Project
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
