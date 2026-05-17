import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ScrollToTop } from "@/components/ScrollToTop"
import { buttonVariants } from "@/components/ui/button"
import { cn, getAssetPath } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function CustomDesignPage() {
  return (
    <main className="min-h-screen bg-[#Fdfbf7]">
      <Navbar />
      
      <section className="py-20 md:py-32 pt-24 md:pt-36 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative z-10">
              <div className="inline-block border border-[#8b0000] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase text-[#8b0000]">
                Bespoke Services
              </div>
              <h1 className="text-5xl md:text-7xl font-serif text-[#382b20] leading-tight">
                Your Love Story,<br />
                <span className="italic">Custom Designed.</span>
              </h1>
              <p className="text-lg text-[#5a4838] max-w-lg leading-relaxed">
                Work directly with our master designers to create a one-of-a-kind wedding invitation suite. From custom family crests and monograms to unique die-cut folders, we bring your exact vision to life.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className={cn(
                    buttonVariants({ size: "lg" }), 
                    "bg-[#8b0000] hover:bg-[#6b0000] text-white px-8 py-6 rounded-none text-sm tracking-widest uppercase flex items-center justify-center"
                  )}
                >
                  Book a Consultation
                </Link>
                <Link 
                  href="/gallery" 
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }), 
                    "border-[#8b0000] text-[#8b0000] hover:bg-[#8b0000]/10 px-8 py-6 rounded-none text-sm tracking-widest uppercase flex items-center justify-center"
                  )}
                >
                  View Portfolio
                </Link>
              </div>
              
              <div className="pt-8 border-t border-[#382b20]/10 grid grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-[#382b20] text-2xl">100%</h4>
                  <p className="text-sm text-[#5a4838]">Custom Art</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#382b20] text-2xl">Premium</h4>
                  <p className="text-sm text-[#5a4838]">Materials</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#382b20] text-2xl">Unlimited</h4>
                  <p className="text-sm text-[#5a4838]">Revisions</p>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-t-full overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src={getAssetPath("/images/hero_banner_3.png")} 
                  alt="Custom Wedding Design" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#f5f0e6] rounded-full -z-10 blur-2xl opacity-70"></div>
              <div className="absolute top-1/4 -right-12 w-64 h-64 bg-[#e8e0d5] rounded-full -z-10 blur-3xl opacity-50"></div>
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
