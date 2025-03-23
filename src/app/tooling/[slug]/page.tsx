'use client'
import { toolings } from "../../data/toolings";
import BlinkComp from "../../components/Blinks/BlinkComp";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function ToolingPage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const tooling = toolings.find(tool => 
    tool.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!tooling) {
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
          {tooling.title}
        </p>
        
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl">
            <BlinkComp propActionApiUrl={tooling.blinkUrl} websiteText={tooling.websiteText} />
          </div>
        </div>
      </div>
    </div>
  );
} 