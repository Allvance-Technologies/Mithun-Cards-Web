import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Our Story | Mitun Cards",
  description: "Learn about the legacy and craftsmanship behind Mitun Cards, a premier invitation shop.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
