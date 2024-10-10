import { describe } from "node:test";

export const games = [
  {
    title: "Checkmate",
    description:
    `The first-ever community chess game on Twitter/X, powered by Solana Blinks.

    Each player makes a move as Black or White.
    Play with SOL; if your team wins, earn SEND. 

    CheckMate is a variation designed to make chess community-driven, fun, and rewarding –– made possible with Blinks and cNFTs!

    1️⃣ Check the latest game state and check whether it's Black's or White's turn to play through.

    2️⃣ The player makes their move by either:
    –– selecting one of the 4 suggested moves, or
    –– entering a custom move in the input box (e.g., F2F3 means moving the piece from F2 to F3).

    3️⃣ The bet amount is calculated based on your side's winning odds.

    Higher winning odds → Higher bet amount.

    Receive an NFT for every move played!

    4️⃣ All pooled funds are distributed to the winning side in $SEND.`,
    
    blinkUrl: "https://checkmate.sendarcade.fun"
  },
  {
    title: "Snakes & Ladders",
    description:
    `Introducing Snakes and Ladders on Solana – with a SEND twist, as always 😉

    → Roll the dice.  
    → 4 pieces/teams to move 🔴 🔵 🟡 🟢 
    → Climb ladders. Dodge snakes. Win prizes.

    ––  You play and win as a team [one of the 4 colors]
    ––  Whenever any color piece (or team) wins, the prize pool gets distributed automatically among all the wallet addresses that rolled for that piece

    –– Your team also gets additional prizes (e.g., BONK) as shown on the board. 
    –– A new game begins as soon as the current one ends.`,

    blinkUrl: "https://snakes.sendarcade.fun/game"
  },
  {
    title: "Sendcoin Flip",
    description:
    `Introducing: Double or Nothing!  

    Flip the coin now with 0.1, 0.5, or 1 SOL for a chance to win 2x!`,

    blinkUrl: "https://dial.to/?action=solana-action:https://blink-flip.onrender.com/api/4WEkZJprSsHxadCitfqNdVS3i44sgTP41iETZe4AzS92"
  },
  {
    title: "Save the Blink Man",
    description: "Go smash the ‘Save or Drown’ button and watch Blink Man aka Irfan rise or sink in the image with every tap!",
    blinkUrl: "https://dial.to/?action=solana-action:https://blinkman.sendarcade.fun/api/actions/blinkman"
  },
  {
    title: "Squad Game",
    description: 
    `Squad Game was an onchain survival game on X inspired by Squid Game, powered by Squads Protocol.
    
    Squad Game Season 2 is coming soon!`,

    blinkUrl: "https://dial.to/?action=solana-action:https://squadgames.sendarcade.fun/api/actions/game"
  }
]
