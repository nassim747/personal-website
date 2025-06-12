"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    // Check if we're in development mode
    const isDevelopment = process.env.NODE_ENV === 'development'

    try {
      if (isDevelopment) {
        // In development, just simulate success after a delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('Form data (development mode):', {
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message')
        })
        setIsSubmitted(true)
        form.reset()
      } else {
        // In production, submit to Netlify
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as any).toString(),
        })

        if (response.ok) {
          setIsSubmitted(true)
          form.reset()
        } else {
          throw new Error("Form submission failed")
        }
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setError("Something went wrong. Please try again or contact me directly at nassim.ameur@mail.mcgill.ca")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="p-6">
        <div className="text-center py-8">
          <div className="text-2xl mb-4">✅</div>
          <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground mb-4">
            Thanks for your message! I'll get back to you soon.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            variant="outline"
          >
            Send Another Message
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <form 
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Honeypot field for spam protection */}
        <div style={{ display: 'none' }}>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name *
          </label>
          <Input 
            id="name" 
            name="name" 
            required 
            disabled={isSubmitting}
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            required 
            disabled={isSubmitting}
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <Input 
            id="subject" 
            name="subject" 
            disabled={isSubmitting}
            placeholder="What's this about?"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message *
          </label>
          <Textarea 
            id="message" 
            name="message" 
            required 
            rows={5}
            disabled={isSubmitting}
            placeholder="Tell me about your project, question, or just say hello!"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        
        {error && (
          <div className="text-sm text-center mt-4">
            <p className="text-red-500 mb-2">{error}</p>
            <p className="text-muted-foreground">
              You can also reach me directly at{" "}
              <a 
                href="mailto:nassim.ameur@mail.mcgill.ca" 
                className="text-primary hover:underline"
              >
                nassim.ameur@mail.mcgill.ca
              </a>
            </p>
          </div>
        )}

        {/* Fallback for users with JavaScript disabled */}
        <noscript>
          <div className="text-sm text-center mt-4 p-3 bg-secondary rounded-md">
            <p className="text-muted-foreground">
              JavaScript is required for this form. Alternatively, you can email me directly at{" "}
              <a 
                href="mailto:nassim.ameur@mail.mcgill.ca" 
                className="text-primary hover:underline"
              >
                nassim.ameur@mail.mcgill.ca
              </a>
            </p>
          </div>
        </noscript>
      </form>
    </Card>
  )
}

