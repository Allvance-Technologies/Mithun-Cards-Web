"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Upload, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-12 pt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif text-primary">Get in Touch</h1>
            <p className="text-muted-foreground text-lg">
              Have questions or ready to place an order? Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-primary">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
                    <div className="bg-primary text-white p-3 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Our Studio</h4>
                      <p className="text-sm text-muted-foreground">14/2, Victoria Press Rd, Nagercoil, Tamil Nadu 629001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
                    <div className="bg-primary text-white p-3 rounded-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Phone Number</h4>
                      <p className="text-sm text-muted-foreground">+91 91504 64242</p>
                      <p className="text-sm text-muted-foreground mt-1 text-xs">Mon - Sat: 10am to 7pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
                    <div className="bg-primary text-white p-3 rounded-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Email Address</h4>
                      <p className="text-sm text-muted-foreground">hello@mituncards.com</p>
                      <p className="text-sm text-muted-foreground">inquiry@mituncards.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-inner bg-muted flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center p-6">
                  <MapPin size={48} className="mx-auto mb-4 text-muted-foreground/30" />
                  <p className="text-sm text-muted-foreground font-medium">Google Maps Embed Placeholder</p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-2xl bg-background overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-primary/70">Full Name</label>
                        <Input placeholder="Your name" className="bg-muted/30 border-border/50 focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-primary/70">Phone Number</label>
                        <Input placeholder="+91 00000 00000" className="bg-muted/30 border-border/50 focus:border-primary" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-primary/70">Email Address</label>
                        <Input type="email" placeholder="email@example.com" className="bg-muted/30 border-border/50 focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-primary/70">Event Type</label>
                        <Select>
                          <SelectTrigger className="bg-muted/30 border-border/50">
                            <SelectValue placeholder="Select event" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="birthday">Birthday</SelectItem>
                            <SelectItem value="corporate">Corporate</SelectItem>
                            <SelectItem value="baby">Baby Shower</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-primary/70">Your Message</label>
                      <Textarea placeholder="Tell us about your requirements..." className="min-h-[150px] bg-muted/30 border-border/50 focus:border-primary" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-primary/70">Reference Image (Optional)</label>
                      <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer group">
                        <Upload size={32} className="mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                        <p className="text-sm text-muted-foreground">Click to upload or drag and drop reference images</p>
                        <p className="text-[10px] text-muted-foreground/50 mt-1 uppercase">PNG, JPG, PDF (Max 5MB)</p>
                      </div>
                    </div>

                    <Button className="w-full py-6 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 flex items-center gap-2">
                      Send Inquiry <Send size={18} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
