import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ScrollToTop } from "@/components/ScrollToTop"
import Image from "next/image"
import { Check, Shield, Zap, Sparkles } from "lucide-react"

const features = [
  {
    icon: <Sparkles className="w-6 h-6 text-secondary" />,
    title: "Premium Quality",
    description: "We use only the finest papers and finishes, from Italian cardstock to artisan gold foils."
  },
  {
    icon: <Shield className="w-6 h-6 text-secondary" />,
    title: "Custom Design",
    description: "Every card is tailored to your unique vision with unlimited design revisions."
  },
  {
    icon: <Zap className="w-6 h-6 text-secondary" />,
    title: "Fast Delivery",
    description: "Our efficient production process ensures your cards reach you on time, every time."
  },
  {
    icon: <Shield className="w-6 h-6 text-secondary" />,
    title: "Eco-Friendly",
    description: "We offer sustainable paper options for those who care for the planet as much as for style."
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white">Our Story & <span className="italic text-secondary">Legacy</span></h1>
            <p className="text-white/80 text-lg md:text-xl">
              Bringing art and emotion together through the timeless medium of luxury stationery.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Sparkles className="w-full h-full text-white" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                alt="Our Design Studio"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif text-primary leading-tight">Founded on Passion, Driven by Excellence</h2>
                <div className="w-20 h-1 bg-secondary" />
              </div>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Mitun Cards began as a small boutique studio in Mumbai with a simple mission: to elevate the art of invitations. Over the past decade, we have grown into a premier destination for those who value craftsmanship and sophistication.
                </p>
                <p>
                  Every piece of stationery that leaves our studio is a testament to our commitment to quality. From the initial sketch to the final gold press, our artisans ensure that every detail is perfect.
                </p>
                <p>
                  We believe that an invitation is the heartbeat of an event. It sets the tone, builds anticipation, and ultimately becomes a keepsake that carries the memory of the day forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-primary">Why Choose Mitun Cards?</h2>
            <p className="text-muted-foreground">The difference lies in the details. Here's why we are trusted for life's most precious moments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif text-primary">The Artisan's Touch</h2>
              <div className="space-y-6">
                {[
                  "Hand-curated premium paper stocks",
                  "Precision laser cutting and etching",
                  "Traditional letterpress and foil stamping",
                  "Meticulous hand-assembly and finishing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-primary/5 p-2 rounded-full">
                      <Check className="text-primary w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
              <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg translate-y-8">
                <Image src="https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1974&auto=format&fit=crop" alt="Craft Detail" fill className="object-cover" />
              </div>
              <div className="aspect-square relative rounded-xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" alt="Craft Detail" fill className="object-cover" />
              </div>
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
