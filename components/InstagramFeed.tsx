"use client"

import Image from "next/image"
import Link from "next/link"

const posts = [
  { id: 1, image: "/images/card_wedding.png" },
  { id: 2, image: "/images/card_floral.png" },
  { id: 3, image: "/images/insta_5.png" },
  { id: 4, image: "/images/insta_6.png" },
  { id: 5, image: "/images/card_modern.png" },
  { id: 6, image: "/images/insta_7.png" },
  { id: 7, image: "/images/card_gold.png" },
  { id: 8, image: "/images/insta_8.png" },
  { id: 9, image: "/images/insta_9.png" },
  { id: 10, image: "/images/insta_10.png" },
]

export function InstagramFeed() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-serif text-primary mb-10">
          Be part of our 350K+ family{" "}
          <Link href="https://instagram.com/mituncards.in" target="_blank" className="text-blue-600 hover:underline">
            @mituncards.in
          </Link>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-2">
          {posts.map((post) => (
            <div key={post.id} className="relative aspect-square overflow-hidden group cursor-pointer">
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white w-8 h-8"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
