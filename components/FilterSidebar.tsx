"use client"

import * as React from "react"
import { Check, ChevronDown, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

const filters = {
  categories: ["Wedding", "House Warming", "Naming Ceremony", "Engagement", "Religious", "Birthday"],
  religions: ["Hindu", "Muslim", "Sikh", "Christian", "Other"],
  styles: ["Laser Cut", "Floral", "Minimalist", "Royal", "Vintage", "Modern"],
  colors: [
    { name: "Gold", class: "bg-yellow-500" },
    { name: "Maroon", class: "bg-red-900" },
    { name: "White", class: "bg-white border" },
    { name: "Cream", class: "bg-orange-50" },
    { name: "Blue", class: "bg-blue-900" },
    { name: "Pink", class: "bg-pink-300" },
  ]
}

interface FilterSidebarProps {
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
  priceRange: number[]
  setPriceRange: (range: number[]) => void
  selectedStyles: string[]
  setSelectedStyles: (styles: string[]) => void
  selectedColors: string[]
  setSelectedColors: (colors: string[]) => void
  isPriceFilterActive: boolean
  setIsPriceFilterActive: (active: boolean) => void
}

export function FilterSidebar({ 
  selectedCategories, 
  setSelectedCategories, 
  priceRange, 
  setPriceRange,
  selectedStyles,
  setSelectedStyles,
  selectedColors,
  setSelectedColors,
  isPriceFilterActive,
  setIsPriceFilterActive
}: FilterSidebarProps) {

  return (
    <div className="w-full lg:w-64 space-y-8 shrink-0">
      <div className="flex items-center justify-between">
        <h3 className="font-bold flex items-center gap-2">
          <Filter size={18} /> Filters
        </h3>
        <Button 
          variant="link" 
          className="text-xs p-0 h-auto text-primary"
          onClick={() => {
            setSelectedCategories([])
            setPriceRange([0, 1000])
            setSelectedStyles([])
            setSelectedColors([])
            setIsPriceFilterActive(false)
          }}
        >
          Clear All
        </Button>
      </div>

      <Accordion multiple className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger className="text-sm font-bold uppercase tracking-widest">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {filters.categories.map((cat) => (
                <div key={cat} className="flex items-center space-x-2">
                  <Checkbox 
                    id={cat} 
                    checked={selectedCategories.includes(cat)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedCategories([...selectedCategories, cat])
                      } else {
                        setSelectedCategories(selectedCategories.filter(c => c !== cat))
                      }
                    }}
                  />
                  <label htmlFor={cat} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {cat}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-bold uppercase tracking-widest">Price Range (₹)</AccordionTrigger>
          <AccordionContent>
            <div className="pt-4 px-2 space-y-4">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                value={priceRange}
                onValueChange={(val) => {
                  setPriceRange(val as number[])
                  setIsPriceFilterActive(true)
                }}
                className="text-primary"
              />
              <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
                <span>Min: ₹{priceRange[0]}</span>
                <span>Max: ₹{priceRange[1]} {isPriceFilterActive && <span className="text-[#8b0000] ml-1">(Active)</span>}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="colors">
          <AccordionTrigger className="text-sm font-bold uppercase tracking-widest">Colors</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-6 gap-2 pt-2">
              {filters.colors.map((color) => {
                const isSelected = selectedColors.includes(color.name);
                return (
                  <button
                    key={color.name}
                    title={color.name}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedColors(selectedColors.filter(c => c !== color.name))
                      } else {
                        setSelectedColors([...selectedColors, color.name])
                      }
                    }}
                    className={`w-6 h-6 rounded-full ${color.class} hover:scale-125 transition-transform shadow-sm cursor-pointer ${
                      isSelected ? "ring-2 ring-primary ring-offset-2 scale-110" : ""
                    }`}
                  />
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="styles">
          <AccordionTrigger className="text-sm font-bold uppercase tracking-widest">Styles</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {filters.styles.map((style) => (
                <div key={style} className="flex items-center space-x-2">
                  <Checkbox 
                    id={style} 
                    checked={selectedStyles.includes(style)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedStyles([...selectedStyles, style])
                      } else {
                        setSelectedStyles(selectedStyles.filter(s => s !== style))
                      }
                    }}
                  />
                  <label htmlFor={style} className="text-sm font-medium leading-none">
                    {style}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
