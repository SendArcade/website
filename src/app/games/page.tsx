'use client'
import { games } from "../data/games";
import BlinkComp from "../components/Blinks/BlinkComp";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Image from "next/image";
import Link from "next/link";
import closeIcon from "@/assets/svgs/buttons/close.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function GamesPage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center bg-[#1C71FF]">
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-20">
        <Link href="/">
          <p className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[80px] leading-none">SendArcade</p>
        </Link>
        <WalletMultiButton />
      </header>

      <div className="w-full max-w-7.5xl mx-auto px-4 pt-32 pb-12 md:pt-40 md:py-16 lg:py-20">
        <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[94px] text-center leading-none mb-12 md:mb-16">
          Games on Blinks
        </p>
        
        <div className={
          `${games.length === 1 ? 'grid-cols-1' :
          games.length === 2 ? 'grid-cols-1 md:grid-cols-2 xl:pl-40 xl:pr-40 2xl:pl-72 2xl:pr-72 gap-8 xl:gap-16' :
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:pl-20 xl:pr-20 gap-8 xl:gap-12'} 
          grid w-full justify-center`
        }>
          {games.map((game, index) => (
            <div key={index} className="transform transition-transform hover:scale-105">
              <Link href={`/games/${game.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}>
                <p className="text-[42px] leading-none text-center mb-8">{game.title}</p>
              </Link>
              <BlinkComp propActionApiUrl={game.blinkUrl} websiteText={game.websiteText} />

              <div className="hidden md:block">
                <Dialog>
                  <DialogTrigger>
                    <p className="text-[36px] text-center mt-4 cursor-pointer hover:underline transition-colors">
                      Game Mechanics ➪
                    </p>
                  </DialogTrigger>

                  <DialogContent className="bg-[#1C71FF] max-w-2xl">
                    <div className="flex flex-col text-white">
                      <div className="flex justify-between items-start">
                        <div className="text-[42px]">{game.title}</div>
                        <DialogClose>
                          <Image
                            className="w-8 h-8 hover:opacity-80 transition-opacity"
                            src={closeIcon}
                            alt="close"
                            width={40}
                            height={40}
                          />
                        </DialogClose>
                      </div>
                      <div className="text-[24px] whitespace-pre-line pb-4 leading-relaxed">{game.description}</div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 