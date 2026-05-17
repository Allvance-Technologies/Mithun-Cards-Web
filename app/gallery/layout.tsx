import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Mitun Cards Collections",
  description: "Explore our stunning collection of wedding, birthday, and corporate invitation cards.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
