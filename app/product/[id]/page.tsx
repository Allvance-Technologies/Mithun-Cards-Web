import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProductDetailsClient } from "./ProductDetailsClient"

// Mock database containing all invitation cards and stationery products
const getProductData = (id: string) => {
  const allProducts = [
    // Invitation Cards
    { id: 1, name: "Royal Gold Leaf", category: "Wedding", image: "/images/card_wedding.png", price: 45, oldPrice: 60, sku: "MC-W-01", desc: "A luxurious, traditional Indian wedding invitation featuring intricate mandala patterns and premium gold foil." },
    { id: 2, name: "Floral Whisper", category: "Wedding", image: "/images/card_floral.png", price: 35, oldPrice: 45, sku: "MC-W-02", desc: "An elegant, modern floral wedding invitation suite featuring soft watercolor blush pink florals." },
    { id: 3, name: "Midnight Gala", category: "Engagement", image: "/images/insta_8.png", price: 55, oldPrice: 70, sku: "MC-C-03", desc: "A dark, moody, and highly luxurious invitation box made of deep emerald velvet." },
    { id: 4, name: "Cheerful Confetti", category: "Birthday", image: "/images/card_modern.png", price: 25, oldPrice: 35, sku: "MC-B-04", desc: "A playful, modern, and vibrant birthday card with hand-painted gold confetti details." },
    { id: 5, name: "Dreamy Clouds", category: "Naming Ceremony", image: "/images/insta_7.png", price: 30, oldPrice: 40, sku: "MC-BS-05", desc: "A whimsical, pastel-themed naming ceremony card with beautiful watercolor clouds." },
    { id: 6, name: "Vintage Lace", category: "Wedding", image: "/images/insta_5.png", price: 65, oldPrice: 85, sku: "MC-W-06", desc: "An elegant, timeless wedding suite with classic letterpress lace and textured deckled edges." },
    { id: 7, name: "Minimalist Slate", category: "House Warming", image: "/images/insta_10.png", price: 40, oldPrice: 50, sku: "MC-C-07", desc: "A modern, architecturally inspired house warming invitation printed on heavy slate-gray cotton cardstock." },
    { id: 8, name: "Safari Adventure", category: "Religious", image: "/images/card_floral.png", price: 28, oldPrice: 38, sku: "MC-B-08", desc: "A premium gold foil card celebrating traditional customs with beautiful border prints." },
    { id: 9, name: "Starlight Elegance", category: "Wedding", image: "/images/insta_9.png", price: 95, oldPrice: 120, sku: "MC-W-09", desc: "The crown jewel of our collection: a deep navy velvet box invitation featuring brilliant gold foil stars." },
    { id: 10, name: "Golden Arabesque", category: "Religious", image: "/images/card_gold.png", price: 65, oldPrice: 80, sku: "MC-R-10", desc: "An incredibly detailed laser-cut sleeve invitation showcasing premium metallic gold cardstock and calligraphic styling." },
    { id: 11, name: "Imperial Velvet Box", category: "Engagement", image: "/images/insta_6.png", price: 120, oldPrice: 150, sku: "MC-E-11", desc: "An opulent, heavy maroon velvet invitation box with custom silk lining and hand-finished acrylic details." },
    { id: 12, name: "Blossom & Twine", category: "Naming Ceremony", image: "/images/card_wedding.png", price: 38, oldPrice: 50, sku: "MC-N-12", desc: "A gorgeous, rustic invitation made of organic hemp paper and adorned with hand-tied natural jute twine." },

    // Other Products
    { id: 101, name: "Executive Leather Diary", category: "Diaries", image: "/images/premium_diary.png", price: 15, oldPrice: 20, sku: "OP-D-01", desc: "A premium leather-bound diary with gold foil edge pages, perfect for professionals." },
    { id: 102, name: "Marble Desk Calendar", category: "Calendars", image: "/images/premium_calendar.png", price: 12, oldPrice: 18, sku: "OP-C-02", desc: "An elegant, modern minimalist desk calendar on a clean white marble base." },
    { id: 103, name: "Pastel Ribbon Notebooks", category: "Notebooks", image: "/images/premium_notebook.png", price: 25, oldPrice: 35, sku: "OP-N-03", desc: "A beautiful stack of luxurious pastel-colored notebooks tied with a silk ribbon." },
    { id: 104, name: "Minimalist Daily Planner", category: "Planners", image: "/images/premium_diary.png", price: 18, oldPrice: 25, sku: "OP-P-04", desc: "Keep your days organized with this minimalist, high-quality daily planner." },
    { id: 105, name: "Gold Foil Wall Calendar", category: "Calendars", image: "/images/premium_calendar.png", price: 22, oldPrice: 30, sku: "OP-C-05", desc: "A stunning wall calendar featuring gold foil stamping for each month." },
    { id: 106, name: "Linen Cover Journal", category: "Notebooks", image: "/images/premium_notebook.png", price: 16, oldPrice: 22, sku: "OP-N-06", desc: "A soft linen cover journal with thick, bleed-resistant pages." },
  ];
  return allProducts.find(p => p.id.toString() === id) || {
    id: 99, name: "Premium Bespoke Suite", category: "Custom", image: "/images/card_gold.png", price: 50, oldPrice: 75, sku: "MC-CST-99", desc: "A luxurious, minimalist wedding invitation card with heavy gold foil letterpress on thick, textured ivory paper."
  };
};

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "101" },
    { id: "102" },
    { id: "103" },
    { id: "104" },
    { id: "105" },
    { id: "106" },
  ];
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductData(id);

  return (
    <main className="min-h-screen bg-[#Fdfbf7]">
      <Navbar />
      <div className="pt-24">
        <ProductDetailsClient product={product} />
      </div>
      <Footer />
    </main>
  )
}
