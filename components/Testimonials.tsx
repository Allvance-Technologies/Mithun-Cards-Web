"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride",
    content: "The wedding cards were beyond my expectations. The quality of paper and the rose gold foil detailing was absolutely stunning. Every guest mentioned how beautiful the invitation was!",
    stars: 5,
  },
  {
    name: "Vikram Mehta",
    role: "CEO, TechFlow",
    content: "Mitun Cards handled our corporate event invitations with extreme professionalism. Fast delivery and premium feel. Highly recommended for business needs.",
    stars: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "New Mother",
    content: "The baby shower invitations were so cute and elegant at the same time. The design process was smooth and they were very patient with my customization requests.",
    stars: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-primary">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Trusted by thousands of happy customers for their most important life events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all bg-background/60 glass">
                <CardContent className="pt-8 pb-6 px-6 relative">
                  <Quote className="absolute top-4 right-4 text-primary/10 w-12 h-12" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{item.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {item.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.name}</h4>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
