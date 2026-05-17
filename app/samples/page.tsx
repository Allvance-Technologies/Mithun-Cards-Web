import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function SamplesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-16 md:py-24 pt-24 md:pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h1 className="text-4xl md:text-6xl font-serif text-[#382b20]">Experience the Quality</h1>
            <p className="text-[#5a4838] text-lg">
              We believe you should feel the heavy cardstock, see the shine of the gold foil, and admire the vibrant colors before making your final decision. Order a sample kit today.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#Fdfbf7] p-8 md:p-12 rounded-3xl border border-border/50 shadow-xl">
            {/* Product Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image 
                src="/images/card_modern.png" 
                alt="Premium Sample Kit" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-[#382b20] mb-2">The Ultimate Sample Kit</h2>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold text-[#8b0000]">₹499</span>
                  <span className="text-sm text-muted-foreground line-through">₹999</span>
                  <span className="bg-[#8b0000]/10 text-[#8b0000] text-xs font-bold px-2 py-1 rounded">50% OFF</span>
                </div>
                <p className="text-[#5a4838]">
                  Our curated sample kit includes 5 of our best-selling designs across various printing techniques (Foil, Letterpress, Digital) and paper types (Textured, Vellum, Matte).
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-[#382b20] uppercase text-sm tracking-widest">What's Inside:</h3>
                <ul className="space-y-2 text-[#5a4838] text-sm">
                  <li className="flex items-center gap-2">✓ 5 Assorted Invitation Suites</li>
                  <li className="flex items-center gap-2">✓ Premium Envelope Colors</li>
                  <li className="flex items-center gap-2">✓ Wax Seal Samples</li>
                  <li className="flex items-center gap-2">✓ Paper Swatch Book</li>
                  <li className="flex items-center gap-2 font-bold text-[#8b0000]">✓ ₹499 Credit towards your final order</li>
                </ul>
              </div>

              <Button size="lg" className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white py-6 rounded-none tracking-widest uppercase shadow-lg shadow-[#8b0000]/20">
                Add to Cart — ₹499
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-4">Free Shipping across India. Dispatches in 24 hours.</p>
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
