"use client"

import * as React from "react"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Product {
  id: number
  name: string
  category: string
  image: string
  price: number
  oldPrice: number
  sku: string
  desc: string
}

export function ProductDetailsClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = React.useState(100);

  return (
    <>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-border/50 bg-white">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-8 flex flex-col justify-center">
              <div>
                <p className="text-[#8b0000] font-bold tracking-widest text-sm uppercase mb-2">{product.category} Suite</p>
                <h1 className="text-4xl md:text-5xl font-serif text-[#382b20] mb-4">{product.name}</h1>
                <p className="text-[#5a4838] text-lg leading-relaxed">
                  {product.desc}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-border/50">
                <div className="flex items-end gap-4">
                  <span className="text-4xl font-bold text-[#8b0000]">Rs. {product.price.toFixed(2)}</span>
                  <span className="text-xl text-muted-foreground line-through mb-1">Rs. {product.oldPrice.toFixed(2)}</span>
                  <span className="text-sm font-bold text-[#8b0000] mb-2 uppercase">/ per card</span>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-[#5a4838]">Quantity (Min 100)</label>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" onClick={() => setQuantity(Math.max(100, quantity - 50))} className="border-[#382b20]/20 rounded-none w-12 h-12">-</Button>
                    <span className="text-xl font-bold w-16 text-center">{quantity}</span>
                    <Button variant="outline" onClick={() => setQuantity(quantity + 50)} className="border-[#382b20]/20 rounded-none w-12 h-12">+</Button>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1 bg-[#8b0000] hover:bg-[#6b0000] text-white py-8 rounded-none tracking-widest uppercase text-sm shadow-xl shadow-[#8b0000]/20">
                  Order Now — Rs. {(product.price * quantity).toLocaleString()}
                </Button>
                <Button variant="outline" size="lg" className="border-[#8b0000] text-[#8b0000] hover:bg-[#8b0000]/5 py-8 rounded-none tracking-widest uppercase text-sm">
                  Request Sample
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-border/50 space-y-3">
                <h3 className="font-bold text-[#382b20] uppercase text-xs tracking-widest">Premium Features</h3>
                <ul className="space-y-2 text-[#5a4838] text-sm">
                  <li>✓ 600GSM Ultra-Thick Premium Cardstock</li>
                  <li>✓ Authentic Gold Foil Letterpress</li>
                  <li>✓ Hand-lined Premium Envelopes</li>
                  <li>✓ Free Assembly & Custom Calligraphy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </>
  )
}
