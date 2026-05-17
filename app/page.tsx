import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { HeroSection } from "@/components/HeroSection"
import { CircularCategories } from "@/components/CircularCategories"
import { FeaturedCategories } from "@/components/FeaturedCategories"
import { Testimonials } from "@/components/Testimonials"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ScrollToTop } from "@/components/ScrollToTop"
import { CardItem } from "@/components/CardItem"
import { InstagramFeed } from "@/components/InstagramFeed"
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { cn } from "@/lib/utils"
import { ArrowRight, ShoppingBag, Sparkles, Truck, ShieldCheck, CreditCard } from "lucide-react"

export const metadata: Metadata = {
  title: "Mitun Cards | Premium Invitation Cards Shop",
  description: "Explore the best collection of wedding cards, religious invitations, and custom stationery at Mitun Cards.",
}

const featuredProducts = [
  { id: 1, name: "Vibrant Mandap", category: "Hindu", image: "/images/card_wedding.png", price: 55, oldPrice: 75, sku: "MC-HW-01" },
  { id: 2, name: "Golden Arabesque", category: "Muslim", image: "/images/card_gold.png", price: 65, oldPrice: 80, sku: "MC-MS-02" },
  { id: 3, name: "Floral Bloom", category: "Engagement", image: "/images/card_floral.png", price: 42, oldPrice: 50, sku: "MC-EN-03" },
  { id: 4, name: "Royal Parchment", category: "Royal", image: "/images/card_modern.png", price: 120, oldPrice: 150, sku: "MC-RY-04" },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Search Category Navigation */}
      <CircularCategories />

      {/* Trust Badges */}
      <section className="py-8 bg-muted/30 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 justify-center">
              <Truck className="text-primary w-6 h-6" />
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-tighter">Fast Delivery</p>
                <p className="text-[10px] text-muted-foreground">Worldwide Shipping</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center border-l border-border/50 lg:border-l-0">
              <ShieldCheck className="text-primary w-6 h-6" />
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-tighter">Safe & Secure</p>
                <p className="text-[10px] text-muted-foreground">100% Payment Security</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center border-t border-border/50 pt-6 lg:border-t-0 lg:pt-0 lg:border-l lg:border-border/50">
              <Sparkles className="text-primary w-6 h-6" />
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-tighter">Premium Quality</p>
                <p className="text-[10px] text-muted-foreground">Hand-picked Materials</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center border-t border-border/50 pt-6 lg:border-t-0 lg:pt-0 border-l border-border/50 lg:border-l-0 lg:border-l-border/50">
              <CreditCard className="text-primary w-6 h-6" />
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-tighter">Order Samples</p>
                <p className="text-[10px] text-muted-foreground">Try before you buy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sale / Featured Collection */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-10 text-center md:text-left">Sale Collection</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <CardItem
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
                price={product.price}
                oldPrice={product.oldPrice}
                sku={product.sku}
              />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link href="/gallery" className="bg-[#8b0000] text-white font-bold text-sm px-10 py-4 uppercase tracking-widest hover:bg-[#6b0000] transition-colors">
              VIEW ALL
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Banner / Promo */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-[300px] rounded-3xl overflow-hidden group">
              <Image 
                src="/images/card_modern.png" 
                alt="Personalized Cards" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-12 text-white">
                <h3 className="text-3xl font-serif mb-4">Personalized <br />Wedding Cards</h3>
                <Link href="/gallery" className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all text-sm uppercase tracking-widest">
                  Shop Now <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] rounded-3xl overflow-hidden group">
              <Image 
                src="/images/card_gold.png" 
                alt="Religious Cards" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-12 text-white">
                <h3 className="text-3xl font-serif mb-4">Religious <br />Invitations</h3>
                <Link href="/gallery" className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all text-sm uppercase tracking-widest">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedCategories />

      {/* Luxury Collection Promo */}
      <section className="py-24 bg-background text-foreground overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
               <Image
                src="/images/card_floral.png"
                alt="Premium Wedding Invitation"
                width={600}
                height={800}
                className="rounded-2xl shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-secondary uppercase tracking-widest text-sm font-bold">The Gold Standard</span>
              <h2 className="text-3xl md:text-6xl font-serif leading-tight">Handcrafted <br />Imperial Collection</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Elevate your celebration with our most exclusive collection. Featuring gold foil accents, artisan paper, and meticulous hand-finishing.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/gallery" className={cn(buttonVariants({ size: "lg" }), "bg-primary text-primary-foreground hover:bg-secondary hover:text-white rounded-full px-10 text-lg")}>
                  Order Samples
                </Link>
                <Link href="/gallery" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-10 text-lg")}>
                  View Full Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <InstagramFeed />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
