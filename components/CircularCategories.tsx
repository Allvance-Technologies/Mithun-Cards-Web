"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { getAssetPath } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  { name: "Wedding", img: "/images/card_wedding.png", href: "/gallery?cat=wedding" },
  { name: "Engagement", img: "/images/card_floral.png", href: "/gallery?cat=engagement" },
  { name: "Save the Date", img: "/images/card_modern.png", href: "/gallery?cat=savethedate" },
  { name: "Housewarming", img: "/images/card_floral.png", href: "/gallery?cat=housewarming" },
  { name: "Anniversary", img: "/images/card_gold.png", href: "/gallery?cat=anniversary" },
  { name: "Reception", img: "/images/card_wedding.png", href: "/gallery?cat=reception" },
  { name: "Thread Ceremony", img: "/images/card_gold.png", href: "/gallery?cat=thread" },
  { name: "Naming Ceremony", img: "/images/card_modern.png", href: "/gallery?cat=naming" },
  { name: "Birthday Party", img: "/images/card_floral.png", href: "/gallery?cat=birthday" },
  { name: "Baby Shower", img: "/images/card_wedding.png", href: "/gallery?cat=babyshower" },
  { name: "Half Saree", img: "/images/card_gold.png", href: "/gallery?cat=halfsaree" },
  { name: "Ear Piercing", img: "/images/card_floral.png", href: "/gallery?cat=earpiercing" },
]

export function CircularCategories() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.scrollWidth / categories.length;
      setActiveIndex(Math.round(scrollPosition / itemWidth));
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.scrollWidth / categories.length;
      scrollRef.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Scroll by 300px
      const newScrollLeft = direction === 'left' 
        ? scrollRef.current.scrollLeft - scrollAmount 
        : scrollRef.current.scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-[#ebebeb]/30 border-b border-border/50">
      <div className="container mx-auto px-4">
        
        {/* Header and Controls Row */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-4xl font-serif text-[#382b20] text-left">Shop by Celebration</h2>
          
          {/* Elegant Navigation Controls */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="bg-white/95 text-[#382b20] hover:bg-[#8b0000] hover:text-white border border-[#382b20]/10 rounded-full shadow-md flex items-center justify-center h-9 w-9 md:h-12 md:w-12 transition-all duration-300 cursor-pointer hover:shadow-lg active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="md:size-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-white/95 text-[#382b20] hover:bg-[#8b0000] hover:text-white border border-[#382b20]/10 rounded-full shadow-md flex items-center justify-center h-9 w-9 md:h-12 md:w-12 transition-all duration-300 cursor-pointer hover:shadow-lg active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} className="md:size-6" />
            </button>
          </div>
        </div>
        
        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-center justify-start md:justify-center gap-6 md:gap-10 pb-8 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        >
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className="snap-center shrink-0"
            >
              <Link href={cat.href} className="flex flex-col items-center gap-4 group w-28 md:w-44">
                <div className="relative w-28 h-28 md:w-44 md:h-44 rounded-full overflow-hidden border border-transparent group-hover:border-[#8b0000] group-hover:shadow-lg transition-all bg-[#Fdfbf7] p-1">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                      src={getAssetPath(cat.img)}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <span className="text-[11px] md:text-xs font-bold text-[#5a4838] group-hover:text-[#8b0000] transition-colors text-center">
                  {cat.name}
                </span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
