"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CardItem } from "@/components/CardItem"
import { FilterSidebar } from "@/components/FilterSidebar"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ScrollToTop } from "@/components/ScrollToTop"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const cards = [
  { id: 1, name: "Royal Gold Leaf", category: "Wedding", image: "/images/card_wedding.png", price: 45, oldPrice: 60, sku: "MC-W-01", style: "Royal", color: "Gold" },
  { id: 2, name: "Floral Whisper", category: "Wedding", image: "/images/card_floral.png", price: 35, oldPrice: 45, sku: "MC-W-02", style: "Floral", color: "Pink" },
  { id: 3, name: "Midnight Gala", category: "Engagement", image: "/images/insta_8.png", price: 55, oldPrice: 70, sku: "MC-C-03", style: "Minimalist", color: "Blue" },
  { id: 4, name: "Cheerful Confetti", category: "Birthday", image: "/images/card_modern.png", price: 25, oldPrice: 35, sku: "MC-B-04", style: "Modern", color: "Cream" },
  { id: 5, name: "Dreamy Clouds", category: "Naming Ceremony", image: "/images/insta_7.png", price: 30, oldPrice: 40, sku: "MC-BS-05", style: "Minimalist", color: "Pink" },
  { id: 6, name: "Vintage Lace", category: "Wedding", image: "/images/insta_5.png", price: 65, oldPrice: 85, sku: "MC-W-06", style: "Vintage", color: "White" },
  { id: 7, name: "Minimalist Slate", category: "House Warming", image: "/images/insta_10.png", price: 40, oldPrice: 50, sku: "MC-C-07", style: "Minimalist", color: "Blue" },
  { id: 8, name: "Safari Adventure", category: "Religious", image: "/images/card_floral.png", price: 28, oldPrice: 38, sku: "MC-B-08", style: "Floral", color: "Cream" },
  { id: 9, name: "Starlight Elegance", category: "Wedding", image: "/images/insta_9.png", price: 95, oldPrice: 120, sku: "MC-W-09", style: "Royal", color: "Gold" },
  { id: 10, name: "Golden Arabesque", category: "Religious", image: "/images/card_gold.png", price: 65, oldPrice: 80, sku: "MC-R-10", style: "Laser Cut", color: "Gold" },
  { id: 11, name: "Imperial Velvet Box", category: "Engagement", image: "/images/insta_6.png", price: 120, oldPrice: 150, sku: "MC-E-11", style: "Royal", color: "Maroon" },
  { id: 12, name: "Blossom & Twine", category: "Naming Ceremony", image: "/images/card_wedding.png", price: 38, oldPrice: 50, sku: "MC-N-12", style: "Modern", color: "White" },
]

export default function GalleryPage() {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
  const [priceRange, setPriceRange] = React.useState<number[]>([0, 1000])
  const [isPriceFilterActive, setIsPriceFilterActive] = React.useState<boolean>(false)
  const [selectedStyles, setSelectedStyles] = React.useState<string[]>([])
  const [selectedColors, setSelectedColors] = React.useState<string[]>([])
  const [sortOption, setSortOption] = React.useState<string>("featured")
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid')

  const filteredCards = cards.filter(card => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(card.category)) return false;
    if (isPriceFilterActive && (card.price < priceRange[0] || card.price > priceRange[1])) return false;
    if (selectedStyles.length > 0 && !selectedStyles.includes(card.style)) return false;
    if (selectedColors.length > 0 && !selectedColors.includes(card.color)) return false;
    return true;
  }).sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    return 0;
  });

  const isFilteringActive = selectedCategories.length > 0 || isPriceFilterActive || selectedStyles.length > 0 || selectedColors.length > 0;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 py-8 pt-24">
        <Breadcrumbs items={[{ name: "Invitations" }]} />
 
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block">
            <FilterSidebar 
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedStyles={selectedStyles}
              setSelectedStyles={setSelectedStyles}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
              isPriceFilterActive={isPriceFilterActive}
              setIsPriceFilterActive={setIsPriceFilterActive}
            />
          </aside>
 
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Toolbar */}
            <div className="flex items-center justify-between bg-muted/30 p-4 rounded-2xl border border-border/50">
              <div className="flex items-center gap-4">
                <Sheet>
                  <SheetTrigger render={
                    <Button variant="outline" size="sm" className="lg:hidden gap-2 rounded-xl">
                      <SlidersHorizontal size={16} /> Filters
                    </Button>
                  } />
                  <SheetContent side="left" className="w-80">
                    <SheetTitle className="sr-only">Filters</SheetTitle>
                    <div className="py-6 h-full overflow-y-auto">
                      <FilterSidebar 
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        selectedStyles={selectedStyles}
                        setSelectedStyles={setSelectedStyles}
                        selectedColors={selectedColors}
                        setSelectedColors={setSelectedColors}
                        isPriceFilterActive={isPriceFilterActive}
                        setIsPriceFilterActive={setIsPriceFilterActive}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
                <p className="text-sm font-medium tracking-wide text-muted-foreground hidden sm:block">
                  {isFilteringActive ? (
                    <>
                      Showing <span className="font-bold text-foreground">{filteredCards.length}</span> results
                    </>
                  ) : (
                    "All Designs"
                  )}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-1 bg-background rounded-lg p-1 border border-border/50">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setViewMode('grid')}
                    className={cn(
                      "h-8 w-8 rounded-md transition-colors cursor-pointer",
                      viewMode === 'grid' ? "bg-primary text-white hover:bg-primary/95" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <LayoutGrid size={16} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setViewMode('list')}
                    className={cn(
                      "h-8 w-8 rounded-md transition-colors cursor-pointer",
                      viewMode === 'list' ? "bg-primary text-white hover:bg-primary/95" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <List size={16} />
                  </Button>
                </div>
                
                <Select value={sortOption} onValueChange={(val) => val && setSortOption(val)}>
                  <SelectTrigger className="w-[160px] bg-background rounded-xl h-9 border-border/50">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Dynamic Grid/List Wrapper */}
            <div className={cn(
              viewMode === 'list' ? "flex flex-col gap-6" : "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6"
            )}>
              {filteredCards.map((card) => (
                <CardItem
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  category={card.category}
                  image={card.image}
                  price={card.price}
                  oldPrice={card.oldPrice}
                  sku={card.sku}
                  layout={viewMode}
                  onClick={() => router.push(`/product/${card.id}`)}
                />
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="flex justify-center pt-8">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled className="rounded-xl">Prev</Button>
                <Button className="rounded-xl w-10 h-10 p-0">1</Button>
                <Button variant="outline" className="rounded-xl w-10 h-10 p-0">2</Button>
                <Button variant="outline" className="rounded-xl">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
