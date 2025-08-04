"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

interface NewsletterFormProps {
  className?: string
}

export default function NewsletterForm({ className }: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return
    }

    setIsSubscribing(true)
    setSubscribeStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically send the email to your backend
      console.log("Newsletter subscription:", email)
      
      setSubscribeStatus('success')
      setEmail("")
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubscribeStatus('idle'), 5000)
    } catch (error) {
      console.error("Newsletter subscription error:", error)
      setSubscribeStatus('error')
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <div className={className}>
      {/* Success/Error Messages */}
      {subscribeStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center gap-3 max-w-md mx-auto">
          <span className="text-green-400">✓</span>
          <p className="text-green-300">Successfully subscribed to our newsletter!</p>
        </div>
      )}

      {subscribeStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center justify-center gap-3 max-w-md mx-auto">
          <span className="text-red-400">✗</span>
          <p className="text-red-300">Something went wrong. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12"
          required
        />
        <Button 
          type="submit"
          disabled={isSubscribing}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl px-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubscribing ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Subscribing...
            </div>
          ) : (
            <>
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
} 