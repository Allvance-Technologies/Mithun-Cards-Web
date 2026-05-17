import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbsProps {
  items: { name: string; href?: string }[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 overflow-x-auto no-scrollbar whitespace-nowrap pb-2">
      <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
        <Home size={12} /> Home
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={12} className="shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="font-bold text-foreground">{item.name}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

import * as React from "react"
