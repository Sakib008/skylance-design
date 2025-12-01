import Image from "next/image";
import { Users, Award, Target, Star } from "lucide-react";
import { Heart } from "lucide-react";
import {
  Badge,
  CTAButton,
  BackgroundElements,
  FloatingElement,
} from "@/components/ui";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        {/* Background elements */}
        <BackgroundElements variant="hero" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="default"
              icon={
                <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
              }
            >
              Our Story
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skylence Designs
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              “I&apos;m a passionate web designer and developer dedicated to
              creating custom websites that help your business grow through
              smart, creative solutions.
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
                Founded in 2025
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900">
                Our Journey
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded by me in 2025, Skylence Design started with a simple
                  belief: every local business deserves a website that genuinely
                  represents their vision and helps their growth.
                </p>
                <p>
                  Currently, Skylence Design is a one-person studio where I
                  personally handle everything—from design and development to
                  client communication—ensuring custom, high-quality websites
                  without the noise of a big team.
                </p>
                <p>
                  While Skylence began with big dreams to serve many businesses,
                  right now I focus on delivering exceptional results, working
                  closely with each client to create beautiful, functional
                  websites that drive real business results.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    5+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Projects Delivered
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    98%
                  </div>
                  <div className="text-gray-600 text-sm">
                    Client Satisfaction
                  </div>
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
                text="5+ Projects"
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide my work and how I partner with clients like
              you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for perfection in every pixel, every line of code, and
                every client interaction.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                Collaboration
              </h3>
              <p className="text-gray-600">
                Your success is our success. We work closely with you as
                partners, not just vendors.
              </p>
            </div>

            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                Innovation
              </h3>
              <p className="text-gray-600">
                We stay ahead of trends and technologies to deliver cutting-edge
                solutions.
              </p>
            </div>

            <div className="group text-center p-8 bg-white  rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">Passion</h3>
              <p className="text-gray-600">
                We love what we do, and it shows in the quality and care we put
                into every project.
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">
              The Mind Behind Magic
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The solo founder behind Skylence Design who makes the magic happen
              for your business.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 gap-12">
            {[
              {
                name: "Mohammad Sakib",
                role: "Creative Director & Founder",
                image:
                  "https://drive.google.com/uc?export=view&id=1g7JtGt12PPd8xf628S3Ui6yPlDKwmiNE",
                bio: "Passionate about creating exceptional user experiences and leading innovative design solutions.",
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
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mb-3">
                  {member.role}
                </p>
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
            <Badge
              variant="white"
              icon={
                <span className="flex h-2 w-2 rounded-full bg-white mr-2"></span>
              }
            >
              Ready to Collaborate?
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Ready to transform your digital presence? Let&apos;s discuss your
              project and see how we can help bring your vision to life.
            </p>
            <CTAButton href="/contact" variant="white" size="lg">
              Start Your Project
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
