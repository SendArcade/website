'use client'
import { games } from "../../data/games";
import BlinkComp from "../../components/Blinks/BlinkComp";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function GamePage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const game = games.find(game => 
    game.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!game) {
    notFound();
  }

  return (
    <div className="min-h-screen relative flex flex-col items-center bg-[#1C71FF]">
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-20">
        <button 
          onClick={() => router.back()}
          className="text-white text-[24px] hover:opacity-80 transition-opacity"
        >
          ← Go Back
        </button>
        <WalletMultiButton />
      </header>

      <div className="w-full max-w-7.5xl mx-auto px-4 pt-32 pb-12 md:pt-40 md:py-16 lg:py-20">
        <p className="text-[56px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[94px] text-center leading-none mb-12 md:mb-16">
          {game.title}
        </p>
        
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl">
            <BlinkComp propActionApiUrl={game.blinkUrl} websiteText={game.websiteText} />
          </div>
          {game.description && (
            <div className="mt-8 text-white max-w-3xl">
              <h2 className="text-[36px] md:text-[42px] lg:text-[48px] text-center mb-6">About</h2>
              <div className="text-[24px] whitespace-pre-line text-center">
                {game.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 