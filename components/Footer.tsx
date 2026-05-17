import Link from "next/link"
import { Globe, Send, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">Mitun Cards</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              India's leading online store for premium wedding invitations and stationery. Handcrafting elegance since 2010.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm">
                <Globe size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm">
                <Send size={18} />
              </Link>
            </div>
          </div>

          {/* Shop Categories */}
          <div className="space-y-4">
            <h4 className="font-bold text-base uppercase tracking-widest text-primary">Shop By</h4>
            <ul className="space-y-2">
              {["Hindu Wedding Cards", "Muslim Wedding Cards", "Sikh Wedding Cards", "Christian Wedding Cards", "Engagement Cards", "Birthday Invitations"].map((item) => (
                <li key={item}>
                  <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-border" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-base uppercase tracking-widest text-primary">Information</h4>
            <ul className="space-y-2">
              {["About Us", "Shipping Policy", "Terms & Conditions", "Privacy Policy", "Returns & Refunds", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href={item === "About Us" ? "/about" : item === "Contact Us" ? "/contact" : "#"} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-border" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Payment */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-bold text-base uppercase tracking-widest text-primary">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    14/2, Victoria Press Rd, Nagercoil, TN 629001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">+91 91504 64242</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase text-muted-foreground">Payment Methods</h4>
              <div className="flex flex-wrap gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
                <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-[8px] font-bold border border-border">VISA</div>
                <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-[8px] font-bold border border-border">MC</div>
                <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-[8px] font-bold border border-border">UPI</div>
                <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-[8px] font-bold border border-border">PP</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mitun Cards. Premium Invitation Solutions.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Order Samples</Link>
            <Link href="#" className="hover:text-primary transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
