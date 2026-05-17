"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image: "/images/hero_banner.png",
    subtitle: "CELEBRATE BEAUTIFULLY",
    title: "Your Wedding,<br />Your Design,<br />Your Story",
    description: "Premium Wedding Cards Crafted with Care, Printed with Perfection.",
  },
  {
    id: 2,
    image: "/images/hero_banner_2.png",
    subtitle: "LUXURIOUS MOMENTS",
    title: "Elegance in<br />Every Detail,<br />Every Invite",
    description: "Set the perfect tone for your grand celebration with our exclusive collections.",
  },
  {
    id: 3,
    image: "/images/hero_banner_3.png",
    subtitle: "ARTISANAL CRAFT",
    title: "Handcrafted<br />With Love,<br />For You",
    description: "Experience the luxury of premium gold foil, intricate letterpress, and fine papers.",
  }
];

export function HeroSection() {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-[#Fdfbf7]">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[current].image}
            alt="Premium Wedding Invitations"
            fill
            priority
            className="object-cover object-right md:object-center"
          />
          {/* Soft gradient to ensure text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#Fdfbf7] via-[#Fdfbf7]/80 to-transparent w-full md:w-2/3" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl space-y-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block text-[#5a4838] font-bold tracking-[0.15em] uppercase text-xs md:text-sm"
            >
              {slides[current].subtitle}
            </motion.span>
            
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#382b20] leading-[1.1]"
              dangerouslySetInnerHTML={{ __html: slides[current].title }}
            />
            
            <p className="text-lg md:text-xl text-[#5a4838] font-medium max-w-lg">
              {slides[current].description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-6">
              <Link 
                href="/gallery" 
                className={cn(buttonVariants({ size: "lg" }), "rounded-none px-10 py-6 text-sm tracking-widest uppercase bg-[#8b0000] hover:bg-[#6b0000] text-white border-none transition-colors")}
              >
                Explore Collections
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-1 transition-all duration-500",
              current === i ? "w-8 bg-[#8b0000]" : "w-4 bg-black/20 hover:bg-black/40"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
