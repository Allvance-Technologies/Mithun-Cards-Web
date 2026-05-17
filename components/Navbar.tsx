"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun, Search, Heart, User, ShoppingCart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

const categories = [
  { name: "HOME", href: "/" },
  { name: "CUSTOM DESIGN", href: "/custom-design" },
  { name: "STORE", href: "/gallery" },
  { name: "OTHER PRODUCTS", href: "/other-products" },
  { name: "CONTACT US", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [searchOpen, setSearchOpen] = React.useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300 bg-background border-b border-border shadow-sm",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* Menu Toggle (Mobile) */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className={cn(
              "text-2xl md:text-3xl font-serif font-bold tracking-tighter text-primary"
            )}>
              Mitun Cards
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 z-50">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className={cn(
                "text-xs font-bold tracking-widest hover:text-primary transition-colors text-foreground/80"
              )}>
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search cards..." 
              className="pl-10 bg-muted/20 border-primary/30 focus:border-primary/50 focus:bg-background transition-all rounded-full h-9"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn(
                "rounded-full text-foreground hover:bg-black/5 dark:hover:bg-white/10"
              )}
            >
              <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "hidden sm:flex rounded-full text-foreground hover:bg-black/5 dark:hover:bg-white/10"
              )}
            >
              <Heart className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full text-foreground hover:bg-black/5 dark:hover:bg-white/10"
              )}
            >
              <User className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full relative text-foreground hover:bg-black/5 dark:hover:bg-white/10"
              )}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-background">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 top-[60px] bg-background z-50 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col p-6 gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search designs..." className="pl-10 rounded-xl border-primary/30 focus:border-primary/50" />
              </div>

              {categories.map((cat) => (
                <div key={cat.name} className="space-y-3">
                  <Link
                    href={cat.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-serif hover:text-primary transition-colors flex items-center justify-between"
                  >
                    {cat.name}
                  </Link>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button variant="outline" className="rounded-xl">Login</Button>
                <Button className="rounded-xl">Register</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
