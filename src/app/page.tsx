'use client' 

import BlinksSection from "./components/BlinksSection"
import HeroSection from "./components/HeroSection"
import Link from "next/link"

export default function Home() {
  return (
    <main className="bg-white h-full min-h-screen">
      <HeroSection />
      <BlinksSection />
      <div className="bg-[#1C71FF] py-20">
        <div className="max-w-7.5xl mx-auto px-4">
          <h2 className="text-[48px] md:text-[60px] lg:text-[80px] xl:text-[94px] text-center leading-none mb-12 md:mb-16 text-white">
            Explore Our Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/games" className="transform transition-transform hover:scale-105">
              <div className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-[32px] font-bold mb-4">Games</h3>
                <p className="text-lg">Play exciting games on Blinks</p>
              </div>
            </Link>
            <Link href="/tooling" className="transform transition-transform hover:scale-105">
              <div className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-[32px] font-bold mb-4">Tooling</h3>
                <p className="text-lg">Explore Degen Tooling</p>
              </div>
            </Link>
            <Link href="/squad" className="transform transition-transform hover:scale-105">
              <div className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-[32px] font-bold mb-4">Squad Games</h3>
                <p className="text-lg">Join the Squad Game Season 1 Journey</p>
              </div>
            </Link>
            <Link href="/tweets" className="transform transition-transform hover:scale-105">
              <div className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-[32px] font-bold mb-4">Tweets</h3>
                <p className="text-lg">Check out our latest tweets</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
