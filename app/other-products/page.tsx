"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CardItem } from "@/components/CardItem"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutGrid, List } from "lucide-react"
import { useRouter } from "next/navigation"

const paperProducts = [
  { id: 101, name: "Executive Leather Diary", category: "Diaries", image: "/images/premium_diary.png", price: 15, oldPrice: 20, sku: "OP-D-01" },
  { id: 102, name: "Marble Desk Calendar", category: "Calendars", image: "/images/premium_calendar.png", price: 12, oldPrice: 18, sku: "OP-C-02" },
  { id: 103, name: "Pastel Ribbon Notebooks", category: "Notebooks", image: "/images/premium_notebook.png", price: 25, oldPrice: 35, sku: "OP-N-03" },
  { id: 104, name: "Minimalist Daily Planner", category: "Planners", image: "/images/premium_diary.png", price: 18, oldPrice: 25, sku: "OP-P-04" },
  { id: 105, name: "Gold Foil Wall Calendar", category: "Calendars", image: "/images/premium_calendar.png", price: 22, oldPrice: 30, sku: "OP-C-05" },
  { id: 106, name: "Linen Cover Journal", category: "Notebooks", image: "/images/premium_notebook.png", price: 16, oldPrice: 22, sku: "OP-N-06" },
]

export default function OtherProductsPage() {
  const router = useRouter();
  const [sortOption, setSortOption] = React.useState<string>("featured")

  const sortedProducts = [...paperProducts].sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 py-8 pt-24">
        <Breadcrumbs items={[{ name: "Other Products" }]} />

        <div className="space-y-8 mt-6">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif text-primary">Fine Paper Goods</h1>
            <p className="text-muted-foreground text-lg">
              Explore our premium collection of luxury diaries, desk calendars, and crafted notebooks. Designed to elevate your everyday desk experience.
            </p>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between bg-muted/30 p-4 rounded-2xl border border-border/50">
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground hidden sm:block">
                Showing <span className="font-bold text-foreground">{paperProducts.length}</span> products
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1 bg-background rounded-lg p-1 border border-border/50">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md bg-primary text-white">
                  <LayoutGrid size={16} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-md">
                  <List size={16} />
                </Button>
              </div>
              
              <Select value={sortOption} onValueChange={(val) => val && setSortOption(val)}>
                <SelectTrigger className="w-[160px] bg-background rounded-xl h-9 border-border/50">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">New Arrivals</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <CardItem
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
                price={product.price}
                oldPrice={product.oldPrice}
                sku={product.sku}
                hidePricing={true}
                onClick={() => router.push(`/product/${product.id}`)}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
