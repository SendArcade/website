import { useState, useEffect, useRef } from 'react';
import BottomBG from "@/assets/svgs/bgs/BottomBG.svg";
import TopBG from "@/assets/svgs/bgs/TopBG.svg";
import Image from "next/image";
import { games } from "../data/games";
import { toolings } from "../data/toolings";
import { squadgames } from "../data/squadgames";
import { tweets } from "../data/tweets";
import { airdrops } from "../data/airdrops";
import { swaps } from "../data/swaps";
import { fomomint } from "../data/fomomint";
import { fomoburn } from "../data/fomoburn";
import BlinkComp from "./Blinks/BlinkComp";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Tweet } from 'react-twitter-widgets';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import closeIcon from "@/assets/svgs/buttons/close.svg";

const useLazyLoading = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      {
        rootMargin: '200px', // Load tweets when they are 200px away from the viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return { isVisible, ref };
};

const TweetWithSkeleton = ({ tweetId }: { tweetId: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isVisible, ref } = useLazyLoading(); // Using the custom lazy loading hook

  return (
    <div ref={ref} className="relative">
      {isLoading && (
        <Skeleton className="w-full h-[400px]" />
      )}
      {isVisible && (
        <Tweet
          tweetId={tweetId}
          onLoad={() => setIsLoading(false)}
          options={{ conversation: 'none' }} // Optional: Customize tweet appearance
        />
      )}
    </div>
  );
};

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const BlinksSection = () => {
  return (
    <div
      id="blinks"
      className="min-h-screen relative flex flex-col items-center bg-[#1C71FF]"
    >
      <header className="absolute top-0 left-0 w-full flex justify-end p-6 z-20">
        <WalletMultiButton />
      </header>

      <div className="w-full max-w-7.5xl mx-auto px-4 py-12 md:py-16 lg:py-20">
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
              <p className="text-[42px] leading-none text-center mb-8">{game.title}</p>
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

        <div className="mt-24 md:mt-32">
          <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[94px] text-center leading-none mb-12 md:mb-16">
            Degen Tooling
          </p>

          <div className={
            `${toolings.length === 1 ? 'grid-cols-1' :
            toolings.length === 2 ? 'grid-cols-1 md:grid-cols-2 xl:pl-40 xl:pr-40 2xl:pl-72 2xl:pr-72 gap-8 xl:gap-16' :
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:pl-20 xl:pr-20 gap-8 xl:gap-12'} 
            grid w-full justify-center`
          }>
            {toolings.map((tooling, index) => (
              <div key={index} className="transform transition-transform hover:scale-105">
                <p className="text-[42px] leading-none text-center mb-8">{tooling.title}</p>
                <BlinkComp propActionApiUrl={tooling.blinkUrl} websiteText={tooling.websiteText} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          <p className="text-[48px] md:text-[60px] lg:text-[80px] xl:text-[94px] text-center leading-none mb-12 md:mb-16 px-8">
            Squad Game Season 1 Journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:pl-4 2xl:pr-4 gap-8 2xl:gap-12 w-full max-w-7.5xl mx-auto">
            {squadgames.map((squadgame, index) => (
              <div key={index} className="transform transition-transform hover:scale-105">
                <p className="text-[38px] leading-none text-center mb-8">{squadgame.title}</p>
                <BlinkComp propActionApiUrl={squadgame.blinkUrl} websiteText={squadgame.websiteText} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 md:mt-32">
          <p className="text-[42px] md:text-[60px] lg:text-[80px] xl:text-[94px] text-center leading-none mb-12 md:mb-16 px-8">
            Tweets that keep us rollin on da feeds
          </p>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-8">
            {shuffleArray([...tweets]).map((tweetUrl, index) => {
              const tweetId = tweetUrl.split("/").pop() || "";
              return (
                <div key={index} className="mb-8 break-inside-avoid">
                  <TweetWithSkeleton tweetId={tweetId} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Image
        className="w-full h-full mt-24"
        src={BottomBG}
        alt="Sponsors"
        width={240}
        height={240}
      />
    </div>
  );
};

export default BlinksSection;
