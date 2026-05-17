"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

const categories = [
  {
    title: "Heritage Invitations",
    image: "/images/card_wedding.png",
    href: "/gallery?collection=heritage",
  },
  {
    title: "Floral Stationery",
    image: "/images/card_floral.png",
    href: "/gallery?collection=floral",
  },
  {
    title: "Minimalist Suites",
    image: "/images/card_modern.png",
    href: "/gallery?collection=minimalist",
  },
  {
    title: "Gold Foil Cards",
    image: "/images/card_gold.png",
    href: "/gallery?collection=imperial",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-primary">Explore Our Collections</h2>
            <p className="text-muted-foreground">
              From grand weddings to intimate celebrations, we have the perfect invitation for every occasion.
            </p>
          </div>
          <Link href="/gallery" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all underline decoration-primary/30 underline-offset-8">
            View All Collections <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group relative h-[400px] overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={getAssetPath(cat.image)}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-serif text-white mb-2">{cat.title}</h3>
                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-2 text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:text-secondary"
                >
                  Browse Designs <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
