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

      {/* <Image
        className="w-full h-full"
        src={TopBG}
        alt="Top Background"
        width={240}
        height={240}
      /> */}

      {/* Grid layout for 3 items per row */}
      {/* <div className={
        `${airdrops.length === 1 ? 'grid-cols-1 md:pl-52 md:pr-52 lg:pl-fuck3 lg:pr-fuck3 lg:pl-fuck3 lg:pr-fuck3 xl:pl-fuck2 xl:pr-fuck2 2xl:pl-fuck 2xl:pr-fuck gap-4 xl:gap-16' :
        airdrops.length === 2 ? 'grid-cols-1 md:grid-cols-2 xl:pl-40 xl:pr-40 2xl:pl-72 2xl:pr-72 gap-4 xl:gap-16' :
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:pl-20 xl:pr-20 gap-4 xl:gap-12'}
        grid w-full max-w-7.5xl p-4 justify-center xl:pt-8`
      }>
        {airdrops.map((airdrop, index) => (
          <div key={index}>
            <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[80px] leading-none text-center mb-8 mt-4 pt-12">{airdrop.title}</p>
            <BlinkComp propActionApiUrl={airdrop.blinkUrl} websiteText={airdrop.websiteText} />
          </div>
        ))}
      </div> */}

      {/* <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[94px] text-center pt-8 leading-none sm:mt-0 mt-12">
        FOMO
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-12 lg:gap-8 gap-4 w-full max-w-7.5xl p-4 justify-center lg:pl-40 lg:pr-40 xl:pl-72 xl:pr-72 2xl:pl-80 2xl:pr-80">

        <div>
          {fomomint.map((mint, index) => (
            <div key={index}>
              <p className="text-[42px] sm:text-[56px] leading-none text-center mb-8 mt-4">{mint.title}</p>
              <BlinkComp propActionApiUrl={mint.blinkUrl} websiteText={mint.websiteText} />
            </div>
          ))}
        </div>

        <div>
          {fomoburn.map((burn, index) => (
            <div key={index}>
              <p className="text-[42px] sm:text-[56px] leading-none text-center mb-8 mt-4">{burn.title}</p>
              <BlinkComp propActionApiUrl={burn.blinkUrl} websiteText={burn.websiteText} />
            </div>
          ))}
        </div>

      </div>

      <div className="w-full flex justify-center">
        <p
          className="text-[42px] md:text-[56px] text-center mt-4 cursor-pointer hover:underline"
          onClick={() => window.open('https://brawny-law-3b1.notion.site/SEND-FOMO-How-it-Works-12498fb3ea898028b2d9db9e50026601', '_blank')}
        >
          Game Mechanics ➪
        </p>
      </div> */}

      {/* Grid layout for 2 sections (Claim your airdrop & Trade SEND) */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-12 lg:gap-8 gap-4 w-full max-w-7.5xl p-4 justify-center xl:pt-8 lg:pl-40 lg:pr-40 xl:pl-72 xl:pr-72 2xl:pl-80 2xl:pr-80"> */}

        {/* Claim Your Airdrop Section */}
        <div>
          {/* <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[80px] leading-none text-center mb-8 mt-4 pt-12">Claim your airdrop!</p> */}
          {/* <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[80px] leading-none text-center mb-8 mt-4 pt-0">Claim your airdrop!</p>
          {airdrops.map((airdrop, index) => (
            <div key={index}>
              <BlinkComp propActionApiUrl={airdrop.blinkUrl} websiteText={airdrop.websiteText} />
            </div>
          ))} */}
        </div>

        {/* Trade SEND Section */}
        <div>
          {/* <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[80px] leading-none text-center mb-8 pt-4 md:mt-4 md:pt-12">Trade SEND</p> */}
          {/* <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[80px] leading-none text-center mb-8 pt-4 md:mt-4 md:pt-0">Trade SEND</p>
          {swaps.map((swap, index) => (
            <div key={index}>
              <BlinkComp propActionApiUrl={swap.blinkUrl} websiteText={swap.websiteText} />
            </div>
          ))} */}
        </div>

      {/* </div> */}

      {/* <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[94px] text-center pt-8 leading-none"> */}
      <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[94px] text-center pt-20 md:pt-8 leading-none">
        Games on Blinks
      </p>
      {/* Grid layout for 3 items per row */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7.5xl p-20">
        {games.map((game, index) => (
          <div key={index}>
            <p className="text-[42px] leading-none text-center mb-8">{game.title}</p>
            <BlinkComp propActionApiUrl={game.blinkUrl} />
          </div>
        ))}
      </div> */}

      {/* Grid layout for 3 items per row */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7.5xl xl:p-20 p-4"> */}
      <div className={
        `${games.length === 1 ? 'grid-cols-1' :
        games.length === 2 ? 'grid-cols-1 md:grid-cols-2 xl:pl-40 xl:pr-40 2xl:pl-72 2xl:pr-72 gap-4 xl:gap-16' :
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:pl-20 xl:pr-20 gap-4 xl:gap-12'}
        grid w-full max-w-7.5xl p-4 justify-center xl:pt-8`
      }>
        {games.map((game, index) => (
          <div key={index}>
            <p className="text-[42px] leading-none text-center mb-8 mt-4">{game.title}</p>
            <BlinkComp propActionApiUrl={game.blinkUrl} websiteText={game.websiteText} />

            {/* Game Mechanics Text */}
            <div className="hidden md:block">
              <Dialog>
                <DialogTrigger>
                  <p
                    className="text-[36px] text-center mt-4 cursor-pointer hover:underline"
                  >
                    Game Mechanics ➪
                  </p>
                </DialogTrigger>

                <DialogContent className="bg-[#1C71FF]">
                  <div className="flex flex-col text-white">
                    <div className="flex justify-between align-top ">
                      <div className="text-[42px]"> {game.title} </div>
                      <DialogClose>
                        <Image
                          className="w-8 h-8"
                          src={closeIcon}
                          alt="close"
                          width={40}
                          height={40}
                        />
                      </DialogClose>
                    </div>
                    <div className="text-[24px] whitespace-pre-line pb-4 leading-none">{game.description}</div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>

      {/* <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[94px] text-center pt-8 leading-none sm:mt-0 mt-12">
        FOMO
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-12 lg:gap-8 gap-4 w-full max-w-7.5xl p-4 justify-center lg:pl-40 lg:pr-40 xl:pl-72 xl:pr-72 2xl:pl-80 2xl:pr-80">

        <div>
          {fomomint.map((mint, index) => (
            <div key={index}>
              <p className="text-[42px] sm:text-[56px] leading-none text-center mb-8 mt-4">{mint.title}</p>
              <BlinkComp propActionApiUrl={mint.blinkUrl} websiteText={mint.websiteText} />
            </div>
          ))}
        </div>

        <div>
          {fomoburn.map((burn, index) => (
            <div key={index}>
              <p className="text-[42px] sm:text-[56px] leading-none text-center mb-8 mt-4">{burn.title}</p>
              <BlinkComp propActionApiUrl={burn.blinkUrl} websiteText={burn.websiteText} />
            </div>
          ))}
        </div>

      </div>

      <div className="w-full flex justify-center">
        <p
          className="text-[42px] md:text-[56px] text-center mt-4 cursor-pointer hover:underline"
          onClick={() => window.open('https://brawny-law-3b1.notion.site/SEND-FOMO-How-it-Works-12498fb3ea898028b2d9db9e50026601', '_blank')}
        >
          Game Mechanics ➪
        </p>
      </div> */}

      {/* <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[94px] pt-6 md:pt-0 text-center leading-none"> */}
      <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[94px] pt-8 md:pt-8 text-center leading-none">
        Degen Tooling
      </p>

      {/* Grid layout for 3 items per row */}
      <div className={
        `${games.length === 1 ? 'grid-cols-1' :
        games.length === 2 ? 'grid-cols-1 md:grid-cols-2 xl:pl-40 xl:pr-40 2xl:pl-72 2xl:pr-72 gap-4 xl:gap-16' :
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:pl-20 xl:pr-20 gap-4 xl:gap-12'}
        grid w-full max-w-7.5xl p-4 justify-center xl:pt-8`
      }>
        {toolings.map((tooling, index) => (
          <div key={index}>
            <p className="text-[42px] leading-none text-center mb-8 mt-4">{tooling.title}</p>
            <BlinkComp propActionApiUrl={tooling.blinkUrl} websiteText={tooling.websiteText} />
          </div>
        ))}
      </div>

      {/* <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[94px] pt-6 md:pt-12 text-center leading-none">
        Squad Game Season 1 Journey
      </p> */}
      <p className="text-[48px] md:text-[60px] lg:text-[80px] xl:text-[94px] text-center leading-none pt-6 md:pt-12 pl-8 pr-8">
        Squad Game Season 1 Journey
      </p>

      {/* Grid layout for 3 items per row */}
      <div className={
        `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:pl-4 2xl:pr-4 gap-4 2xl:gap-8 grid w-full max-w-7.5xl p-4 justify-center xl:pt-8`
      }>
        {squadgames.map((squadgame, index) => (
          <div key={index}>
            <p className="text-[38px] leading-none text-center mb-8 mt-4">{squadgame.title}</p>
            <BlinkComp propActionApiUrl={squadgame.blinkUrl} websiteText={squadgame.websiteText} />
          </div>
        ))}
      </div>

      {/* Iconic Tweets Section */}
      {/* <p className="text-[40px] md:text-[60px] lg:text-[80px] xl:text-[94px] text-center pt-20"> */}
      <p className="text-[42px] md:text-[60px] lg:text-[80px] xl:text-[94px] text-center leading-none pt-6 pb-2 md:pt-8 md:pb-8 xl:pt-12 xl:pb-12 pl-8 pr-8">
        Tweets that keep us rollin on da feeds
      </p>

      {/* Masonry-like layout for tweets */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 w-full max-w-7.5xl p-4">
        {shuffleArray([...tweets]).map((tweetUrl, index) => {
          const tweetId = tweetUrl.split("/").pop() || ""; // Fallback to empty string
          console.log(`Rendering Tweet: ${tweetId}`);
          return (
            <div key={index} className="mb-4 break-inside-avoid">
              <TweetWithSkeleton tweetId={tweetId} />
            </div>
          );
        })}
      </div>

      <Image
        className="w-full h-full"
        src={BottomBG}
        alt="Sponsors"
        width={240}
        height={240}
      />
    </div>
  );
};

export default BlinksSection;
