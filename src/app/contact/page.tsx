"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Clock,  
  CheckCircle2, Sparkles, Send, Loader2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BackgroundElements, FloatingElement } from "@/components/ui";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-purple-500/30">
      
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <BackgroundElements variant="hero" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-8">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Open for new projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Let&apos;s start a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                conversation.
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Ready to upgrade your digital presence? We&apos;re here to help you navigate the future.
            </p>
          </motion.div>
        </div>
      </section>


      {/* ---------------- 2. SPLIT CONTACT SECTION ---------------- */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* LEFT: INFO & CONTACT DETAILS (5 cols) */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Context */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Info</h2>
                <div className="space-y-6">
                  <ContactItem icon={Mail} title="Email Us" value="skylencedesigns@gmail.com" />
                  <ContactItem icon={Phone} title="Call Us" value="+91 9990111593" />
                  <ContactItem icon={MapPin} title="Visit Us" value="242 Hari Nagar Ashram, New Delhi" />
                  <ContactItem icon={Clock} title="Working Hours" value="Mon-Fri: 9AM - 6PM" />
                </div>
              </div>

              {/* Trust Badge */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 relative overflow-hidden">
                 <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-4">
                     <Sparkles className="w-6 h-6 text-purple-400" />
                     <h3 className="font-bold text-white text-lg">Fast Response</h3>
                   </div>
                   <p className="text-slate-400 text-sm leading-relaxed">
                     We value your time. Expect a reply within <span className="text-white font-semibold">2-4 business hours</span>.
                   </p>
                 </div>
              </div>

            </div>


            {/* RIGHT: THE FORM (7 cols) */}
            <div className="lg:col-span-7 relative">
              <div className="relative bg-[#0A0A0E] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                
                {/* Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Send a Message</h2>
                  <p className="text-slate-400">Tell us about your project, goals, and timeline.</p>
                </div>

                {/* Form Logic */}
                {submitStatus === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-[400px] flex flex-col items-center justify-center text-center p-8 bg-green-500/5 rounded-2xl border border-green-500/20"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                    <p className="text-slate-400 max-w-sm">
                      Thank you for reaching out. We will review your project details and get back to you shortly.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-8 border-white/10 text-white hover:bg-white/10"
                      onClick={() => setSubmitStatus("idle")}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                        <Input 
                          id="name" name="name" 
                          placeholder="John Doe"
                          value={formData.name} onChange={handleChange}
                          className="bg-white/5 border-white/10 text-white focus:border-purple-500 h-12 rounded-xl"
                        />
                        {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                        <Input 
                          id="email" name="email" type="email"
                          placeholder="john@company.com"
                          value={formData.email} onChange={handleChange}
                          className="bg-white/5 border-white/10 text-white focus:border-purple-500 h-12 rounded-xl"
                        />
                        {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-slate-300">Company (Optional)</label>
                      <Input 
                        id="company" name="company" 
                        placeholder="Your Company Ltd."
                        value={formData.company} onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white focus:border-purple-500 h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                      <Textarea 
                        id="message" name="message" 
                        placeholder="Tell us about your project..."
                        rows={6}
                        value={formData.message} onChange={handleChange}
                        className="bg-white/5 border-white/10 text-white focus:border-purple-500 rounded-xl resize-none"
                      />
                      {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 bg-white text-black hover:bg-slate-200 font-bold text-lg rounded-xl transition-all"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="mr-2 h-5 w-5" /> Send Message</>
                      )}
                    </Button>
                  </form>
                )}

                {/* Floating Decoration */}
                <FloatingElement 
                  icon={<Sparkles className="h-4 w-4 text-yellow-400" />} 
                  text="Free Consultation"
                  position="top-right"
                  className="absolute -top-6 -right-6 hidden lg:block"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

import { LucideIcon } from "lucide-react";

interface ContactItemProps {
  icon: LucideIcon;
  title: string;
  value: string;
}
// --- SUB-COMPONENT: Contact Item ---
function ContactItem({ icon: Icon, title, value }: ContactItemProps) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
        <Icon className="w-5 h-5 text-slate-400 group-hover:text-purple-400" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-white">{title}</h4>
        <p className="text-slate-400 text-sm">{value}</p>
      </div>
    </div>
  );
}
