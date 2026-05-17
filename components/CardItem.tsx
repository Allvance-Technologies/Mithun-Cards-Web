"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ZoomIn, ShoppingCart, Heart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn, getAssetPath } from "@/lib/utils"

interface CardItemProps {
  id: number
  name: string
  category: string
  image: string
  price?: number
  oldPrice?: number
  sku?: string
  rating?: number
  hidePricing?: boolean
  layout?: "grid" | "list"
  onClick?: () => void
}

export function CardItem({ 
  name, 
  category, 
  image, 
  price = 41.30, 
  oldPrice = 82.60, 
  sku = "MC-1024", 
  rating = 5,
  hidePricing = false,
  layout = "grid",
  onClick 
}: CardItemProps) {
  const discount = !hidePricing && oldPrice > price ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

  return (
    <div
      className={cn(
        "group bg-background overflow-hidden hover:shadow-lg transition-all duration-500 flex h-full",
        layout === "list" ? "flex-row gap-6 p-4 border border-border/40 rounded-2xl" : "flex-col"
      )}
    >
      {/* Image Container */}
      <div 
        className={cn(
          "relative overflow-hidden cursor-pointer bg-muted/20",
          layout === "list" ? "aspect-square w-32 md:w-44 rounded-xl shrink-0" : "aspect-[4/5]"
        )} 
        onClick={onClick}
      >
        <Image
          src={getAssetPath(image)}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        {discount > 0 && (
          <>
            <div className="absolute top-4 left-4 bg-[#dc2626] text-white text-[11px] px-2 py-1 font-bold z-10">
              -{discount}%
            </div>
            <div className="absolute top-4 right-4 bg-[#dc2626] text-white text-[12px] w-12 h-12 rounded-full flex items-center justify-center font-bold z-10 opacity-90 shadow-sm">
              Sale
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className={cn(
        "space-y-2 flex-grow flex flex-col",
        layout === "list" ? "pt-2 pb-2 justify-center" : "pt-4 pb-2"
      )}>
        <div>
          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">{category}</span>
          <h4 className="font-serif text-[16px] md:text-[18px] leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors cursor-pointer mt-1" onClick={onClick}>
            {name}
          </h4>
          {layout === "list" && (
            <p className="text-sm text-muted-foreground mt-2 max-w-xl hidden md:block">
              Premium textured invitation card featuring exquisite artisanal detailing and custom layouts.
            </p>
          )}
        </div>

        {!hidePricing && (
          <div className="flex items-center gap-2 mt-2 pt-1">
            {oldPrice > price && (
              <span className="text-[13px] text-muted-foreground line-through">Rs. {oldPrice.toFixed(2)}</span>
            )}
            <span className="text-[14px] font-bold text-[#dc2626]">Rs. {price.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  )
}

