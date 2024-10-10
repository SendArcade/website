import { useState } from 'react';
import BottomBG from "@/assets/svgs/bgs/BottomBG.svg";
import TopBG from "@/assets/svgs/bgs/TopBG.svg";
import Image from "next/image";
import { games } from "../data/games";
import { toolings } from "../data/toolings";
import { squadgames } from "../data/squadgames";
import { tweets } from "../data/tweets";
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
import { CardBg } from "@/assets/bgs/CardBg";

const TweetWithSkeleton = ({ tweetId }: { tweetId: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton className="w-full h-[400px]" />
      )}
      <Tweet
        tweetId={tweetId}
        onLoad={() => setIsLoading(false)}
        options={{ conversation: 'none' }} // Optional: Customize tweet appearance
      />
    </div>
  );
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

      <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[94px] text-center pt-24 leading-none">
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
            <BlinkComp propActionApiUrl={game.blinkUrl} />

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

      <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[94px] text-center leading-none">
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
            <BlinkComp propActionApiUrl={tooling.blinkUrl} />
          </div>
        ))}
      </div>

      {/* <p className="text-[94px] text-center">Squad Game Journey</p> */}

      {/* Grid layout for 3 items per row */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7.5xl p-4">
        {squadgames.map((squadgame, index) => (
          <div key={index}>
            <p className="text-[42px] leading-none text-center mb-8">{squadgame.title}</p>
            <BlinkComp propActionApiUrl={squadgame.blinkUrl} />
          </div>
        ))}
      </div> */}

      {/* Iconic Tweets Section */}
      {/* <p className="text-[40px] md:text-[60px] lg:text-[80px] xl:text-[94px] text-center pt-20"> */}
      <p className="text-[42px] md:text-[60px] lg:text-[80px] xl:text-[94px] text-center leading-none pt-8 pb-4 md:pt-12 md:pb-8 xl:pt-16 xl:pb-12">
        Tweets that keep us rollin on da feeds
      </p>

      {/* Masonry-like layout for tweets */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 w-full max-w-7.5xl p-4">
        {tweets.map((tweetUrl, index) => {
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
