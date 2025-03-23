'use client'
import { toolings } from "../data/toolings";
import BlinkComp from "../components/Blinks/BlinkComp";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from "next/link";

export default function ToolingPage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center bg-[#1C71FF]">
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-20">
        <Link href="/">
          <p className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[80px] leading-none">SendArcade</p>
        </Link>
        <WalletMultiButton />
      </header>

      <div className="w-full max-w-7.5xl mx-auto px-4 pt-32 pb-12 md:pt-40 md:py-16 lg:py-20">
        <p className="text-[48px] md:text-[60px] lg:text-[80px] xl:text-[94px] text-center leading-none mb-12 md:mb-16 px-8">
          Tooling
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:pl-4 2xl:pr-4 gap-8 2xl:gap-12 w-full max-w-7.5xl mx-auto">
          {toolings.map((tooling, index) => (
            <div key={index} className="transform transition-transform hover:scale-105">
              <Link href={`/tooling/${tooling.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <p className="text-[38px] leading-none text-center mb-8">{tooling.title}</p>
              </Link>
              <BlinkComp propActionApiUrl={tooling.blinkUrl} websiteText={tooling.websiteText} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 