export default interface projectInterface {
  title: string;
  imageUrl: string;
  description: string;
  href: string;
  images?: string[];
}

export const projects: projectInterface[] = [
  {
    title: "O-WEEK 2025",
    imageUrl: "/images/projects/oweek-project.webp",
    description: "O-WEEK 2025 is an exciting event organized for new students at Universitas Ciputra. Checkout the website -> https://oweek-2025-fix.vercel.app.",
    href: "o-week-2025",
  },
  {
    title: "ENTHUSIAST RUN",
    imageUrl: "/images/projects/enthusiast-project.webp",
    description: "Enthusiast Run is a thrilling running event designed for fitness enthusiasts and athletes of all levels. Checkout the website -> https://enthusiastrun.com",
    href: "enthusiastrun",
  },
  {
    title: "NPLC 2025",
    imageUrl: "/images/projects/nplc-project.webp",
    description: "NPLC 2025 (National Programming and Logic Competition) is an annual coding competition that brings together talented programmers from across the nation. Checkout the website -> https://nplc.vercel.app.",
    href: "nplc",
  },
  {
    title: "RECTORCUP 2026",
    imageUrl: "/images/projects/rectorcup-project.webp",
    description: "RectorCup 2026 is an annual sports competition held among universities, fostering camaraderie and healthy competition among students. Checkout the website -> https://rectorcupuc.vercel.app",
    href: "rectorcup",
  },
  {
    title: "XCELERATE",
    imageUrl: "/images/projects/xcelerate/main-menu.webp",
    images: [
      "/images/projects/xcelerate/main-menu.webp",
      "/images/projects/xcelerate/main-game.webp",
      "/images/projects/xcelerate/tutorial.webp",
    ],
    description: `XCelerate is a top down real time multiplayer word game for mobile, built by my team and me as a group project for the Amikom game development competition. My role was the game developer, so all of the code was mine to design and wire together. The idea was to make learning English and Bahasa Indonesia vocabulary feel like a match you actually want to win instead of studying, where up to five players race around one arena, collect scattered letter tiles to spell a target word, and submit it at a station before the timer runs out.

The feature I cared about most was the multiplayer abilities system, where every character carries a unique power that can bend the rules of the match. Time Stop freezes the match for everyone in the room while the caster keeps moving and grabbing letters. Super Speed gives the caster a short burst of extra movement speed. Reshuffle Letters wipes every tile off the arena and respawns the whole set in new positions, resetting the board for everyone at once. Immunity is a passive guard that cancels the next hit of damage. And some characters carry no power at all, just pure spelling skill.

The hard part was keeping all of that in sync across the network. On a single screen any of these abilities would be trivial, but the moment five players share one live match an ability stops being a local action and becomes a question of who owns the thing it touches. Getting each power to behave the same way on every player's screen, deciding what the host controls versus what each player controls, and chasing down the small desyncs took a lot of trial and error, but in the end the system held together reliably for everyone in the room.

The game also pulled together a wide spread of disciplines, from AI word generation and the round and timer loop to Firebase login and saved data, character selection, the tutorial, and the audio and visual effects. On any given day I was switching between game design, network programming, a little applied AI, database work, and a bit of visual and audio art for feel, and learning to make all of those serve one coherent game was a reward on its own.

The tech stack was Unity 2022.3 with C#, with Photon PUN 2 handling all of the multiplayer networking. Firebase handled the login and saved player data, the word bank came from the OpenRouter AI API, and for polish I used LeanTween, TextMesh Pro, and a virtual joystick package for touch input.

The outcome was honest. We did not win the competition, but I finished a working multiplayer game end to end, which was the real goal for me. More than any placement, the abilities system proved I could reason about authority and synchronisation in a live networked game, and asking who owns a piece of state before writing a single line is the habit I carried out of this project.

Checkout the website -> https://yendeveloper.itch.io/xcelerate`,
    href: "xcelerate",
  },
  {
    title: "THE LITTLE COON",
    imageUrl: "/images/projects/littlecoon.svg",
    description: "The Little Coon is an immersive action-adventure game that takes players on a thrilling journey through a mysterious and perilous world. Players assume the role of a hero tasked with battling dark forces, solving intricate puzzles, and uncovering hidden secrets to restore light and balance to the realm.",
    href: "the-little-coon",
  },
  {
    title: "ISEKO : ISEKAI KONEKO",
    imageUrl: "/images/projects/iseko.svg",
    description: "Iseko : Isekai Koneko is an enchanting fantasy game that transports players to a magical world filled with adorable cat companions. Players embark on a quest to save the realm from darkness, utilizing unique abilities and forming bonds with their feline allies to overcome challenges and uncover the secrets of the isekai universe.",
    href: "iseko",
  },
  {
    title: "DARKNESS EVOLUTION",
    imageUrl: "/images/projects/darknessevo.svg",
    description: "Darkness Evolution is an immersive action-adventure game that takes players on a thrilling journey through a mysterious and perilous world. Players assume the role of a hero tasked with battling dark forces, solving intricate puzzles, and uncovering hidden secrets to restore light and balance to the realm.",
    href: "darkness-evolution",
  },
];
