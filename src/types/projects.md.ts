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
    title: "NUSANTARA REBORN",
    imageUrl: "/images/projects/nusantara-reborn/main-game.webp",
    images: [
      "/images/projects/nusantara-reborn/main-game.webp",
      "/images/projects/nusantara-reborn/inventory.webp",
      "/images/projects/nusantara-reborn/powerup.webp",
      "/images/projects/nusantara-reborn/wabah.webp",
    ],
    description: `Nusantara Reborn is a two dimensional nation building simulation game where the player takes over a struggling Indonesia and tries to lead it back toward prosperity. I worked as the only game developer on the team while my teammates handled the design side, so every system in the project was programmed by me. I built the power up draw, the day and night cycle, the unexpected events, the economy, the tax collection, and the user interface, but the feature that pushed me the most is the one I want to focus on here.

The single hardest feature was the AI pathfinding that lets the cars drive around the city on their own while staying on the roads. The difficulty is that Unity's NavMesh system is designed for three dimensional worlds, while Nusantara Reborn is a flat top down two dimensional game, so the standard approach does not simply work. My solution was to adapt the navigation so it behaves correctly on a two dimensional plane, keeping each car sitting flat on the map while the routing still runs underneath it, following the roads and steering around buildings and other cars on its own. Getting the bake, the agent sizes, and the avoidance to feel natural took a lot of trial and error, and it was easily the part of the project that taught me the most.

The journey ran from a single worry all the way to a finished game. My teammate and I started from the concern that the young generation who will one day lead Indonesia rarely get to feel how hard running a country really is, and we shaped that worry into a playable simulation aimed at the idea of Indonesia Emas 2045. From there I built the project up one system at a time, beginning with the time and stat loops, then the buildings and the economy, then the events and the power up draw, and finally the cars and their pathfinding. I tested and iterated until the pieces agreed with one another, produced builds for Windows and macOS, and submitted the finished game to the competition where it was actually played and judged.

The tech stack was Unity 2022.3.62f3 with the Universal Render Pipeline and the two dimensional feature set, and all of the gameplay was written in C#. NavMeshPlus carried the two dimensional navigation, LeanTween handled the user interface animation and transitions, and TextMeshPro handled the text. I wrote the code in Visual Studio Code and used the Unity editor to wire the scriptable objects, scenes, and prefabs together.

In the end the project placed 2nd in the competition, which I am genuinely happy about given that I was the sole programmer on the team. More than the result though, building every system by myself taught me how tightly each one leans on the others, that the time loop, the events, the economy, and the AI all have to agree on the same rules or the whole thing falls apart. The pathfinding in particular taught me to slow down, read the tools carefully, and adapt them to a context they were never built for instead of fighting against them. That patience, along with the habit of checking that a system really works before moving on, is what I will carry into my future projects.

Checkout the website -> https://yendeveloper.itch.io/nusantara-reborn`,
    href: "nusantara-reborn",
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
