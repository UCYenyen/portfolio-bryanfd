export default interface projectInterface {
  title: string;
  imageUrl: string;
  description: string;
  href: string;
  images?: string[];
}

export const projects: projectInterface[] = [
  {
    title: "GF FOOD PREDICTOR",
    imageUrl: "/images/projects/gf-food-predictor.webp",
    description: `GF Food Predictor is a fullstack machine learning web app that predicts what my girlfriend wants to eat, trained on her own eating history. Every meal is logged with its date, day of the week, whether it fell on a weekend, the meal type, her mood, and the budget, and that log becomes the training data for the model.

Under the hood it is a supervised learning classification problem. The logged features are encoded and fed into a Random Forest classifier, which learns patterns such as which dishes she reaches for at lunch on a weekday when she is happy and on a tight budget, and returns the most likely food for a new situation. A random forest suited this data well because it handles a mix of categorical and numeric features, copes with a small and noisy personal dataset, and is far less prone to overfitting than a single decision tree.

The app side is built with Next.js, Prisma, and PostgreSQL. It gives a clean food log where meals can be added, edited, and deleted, a tracked meals table, and a CSV export so the dataset can be pulled straight into the training pipeline. Keeping data collection, storage, and prediction in one product meant the model gets better simply by using the app every day.

The project taught me the full loop of applied machine learning end to end: designing what data to collect, building the product that collects it, choosing and training a model that fits the data, and serving predictions back to a real user.

Checkout the website -> https://gf-food-predictor.vercel.app/food-log`,
    href: "gf-food-predictor",
  },
  {
    title: "CHATLY",
    imageUrl: "/images/projects/chatly/cover.webp",
    images: [
      "/images/projects/chatly/1.webp",
      "/images/projects/chatly/2.webp",
      "/images/projects/chatly/3.webp",
      "/images/projects/chatly/4.webp",
      "/images/projects/chatly/5.webp",
      "/images/projects/chatly/6.webp",
    ],
    description: `Chatly is a customizable WhatsApp AI customer service chatbot platform that uses Retrieval-Augmented Generation (RAG) to give accurate, context-aware answers grounded in a business's own internal documentation. I built it with my team at Universitas Ciputra between January and June 2026.

I built the complete fullstack web dashboard that lets businesses manage their knowledge bases, configure system prompts and AI personas, and track real-time conversation analytics.

I also engineered the end-to-end RAG pipeline, from document chunking and vector embedding creation to semantic retrieval, so every answer stays fact-based. Uploaded PDF documents are embedded with Jina AI and stored in pgvector, and Gemini Flash writes the replies. The Large Language Model is wired to WhatsApp API endpoints for scalable, high-concurrency automated support.`,
    href: "chatly",
  },
  {
    title: "CASTRICITY",
    imageUrl: "/images/projects/castricity/cover.webp",
    images: [
      "/images/projects/castricity/1.webp",
      "/images/projects/castricity/2.webp",
      "/images/projects/castricity/3.webp",
      "/images/projects/castricity/4.webp",
      "/images/projects/castricity/5.webp",
      "/images/projects/castricity/6.webp",
    ],
    description: `Castricity is a national electricity load forecasting platform powered by a hybrid AI system that processes meteorological and economic data to deliver high-precision energy predictions. I built it with my team at Universitas Ciputra between February and April 2026.

The forecasting core uses Prophet and LightGBM for time-series prediction, while an Isolation Forest model runs real-time anomaly detection to help safeguard grid infrastructure.

To keep every prediction transparent and auditable, the platform applies SHAP to explain which factors drive each forecast, so decisions built on the model can be traced back to the data.`,
    href: "castricity",
  },
  {
    title: "EC PRESENT",
    imageUrl: "/images/projects/ec-present/cover.webp",
    images: [
      "/images/projects/ec-present/1.webp",
      "/images/projects/ec-present/2.webp",
      "/images/projects/ec-present/3.webp",
    ],
    description: `EC Present is an Android app that helps people present with confidence, built with my team at Universitas Ciputra between September and December 2025.

Users record a presentation and the app analyzes their gesture, posture, expression and intonation to rate its quality. It gives an overall grade, a score for each aspect, and AI suggestions for both video and audio delivery.

It also includes a timed QnA practice mode where users answer questions out loud, and a learning hub with lessons on structuring a presentation and building engaging slides. The app is built with Kotlin for Android.`,
    href: "ec-present",
  },
  {
    title: "ETERNITY",
    imageUrl: "/images/projects/eternity/cover.webp",
    images: [
      "/images/projects/eternity/1.webp",
      "/images/projects/eternity/2.webp",
      "/images/projects/eternity/3.webp",
      "/images/projects/eternity/4.webp",
    ],
    description: `Eternity is a hybrid physical and digital rally game built for the Effortion committee at Universitas Ciputra, delivered through DEVO between December 2025 and February 2026.

Players complete challenges at physical posts while the web platform tracks their digital inventories and enforces the game rules.

It is built with Next.js, TypeScript, Prisma and PostgreSQL, with Socket.IO powering a real-time leaderboard and instant action feedback across game phases. The platform was deployed with Docker so the event ran smoothly under high concurrent player activity.`,
    href: "eternity",
  },
  {
    title: "ENTHUSIAST FOAM RUN 2026",
    imageUrl: "/images/projects/enthusiastrun/cover.webp",
    images: [
      "/images/projects/enthusiastrun/1.webp",
      "/images/projects/enthusiastrun/2.webp",
      "/images/projects/enthusiastrun/3.webp",
      "/images/projects/enthusiastrun/4.webp",
    ],
    description: `The registration and race pack collection website for Enthusiast Foam Run 2026, a marathon hosted by Universitas Ciputra, built through DEVO between December 2025 and May 2026.

I built the online registration flow and the race pack collection system. The site handled 600+ runner registrations and 300+ visitors while keeping the experience smooth across mobile and desktop throughout the event. Built with Next.js.

Checkout the website -> https://enthusiastrun.com`,
    href: "enthusiastrun",
  },
  {
    title: "RECTORCUP 2026",
    imageUrl: "/images/projects/rectorcup/cover.webp",
    images: [
      "/images/projects/rectorcup/1.webp",
      "/images/projects/rectorcup/2.webp",
    ],
    description: `The official website for Rector Cup UC 2026, a digital platform that streamlines sports competition registrations and delivers real-time live scores for participants and spectators, built between August 2025 and February 2026.

As Website Development Coordinator I led 5 developers, shaped the core application architecture and assigned development tasks across the team. We built an online registration workflow for individual and team sign-ups across various sports branches, and a live scoring feature that pushes instant, accurate match updates.

Built with Next.js, Socket.IO, Prisma and PostgreSQL, the portal shipped on schedule for about 100 registered participants. Source code: https://github.com/UCYenyen/rectorcupuc-2026

Checkout the website -> https://rectorcupuc.vercel.app`,
    href: "rectorcup",
  },
  {
    title: "13TH NPLC",
    imageUrl: "/images/projects/nplc/cover.webp",
    images: [
      "/images/projects/nplc/1.webp",
      "/images/projects/nplc/2.webp",
    ],
    description: `The official website for the 13th National Programming and Logic Competition (NPLC), a web platform that streamlines the entire event registration process, built with my team between July and November 2025.

I built an intuitive, user-friendly interface that handles participant profiles, team sign-ups and secure document submissions, with a responsive experience across all devices throughout the competition lifecycle. Built with TypeScript and Tailwind CSS. Source code: https://github.com/IMT-SU-25-26/13th-NPLC

Checkout the website -> https://nplc.vercel.app`,
    href: "nplc",
  },
  {
    title: "O-WEEK 2025",
    imageUrl: "/images/projects/oweek-project.webp",
    description: "O-WEEK 2025 is an exciting event organized for new students at Universitas Ciputra. Checkout the website -> https://oweek-2025-fix.vercel.app.",
    href: "o-week-2025",
  },
  {
    title: "BIBITZ",
    imageUrl: "/images/projects/bibitz/cover.webp",
    images: [
      "/images/projects/bibitz/1.webp",
      "/images/projects/bibitz/2.webp",
      "/images/projects/bibitz/3.webp",
      "/images/projects/bibitz/4.webp",
      "/images/projects/bibitz/5.webp",
    ],
    description: `Bibitz is a survival game about food sustainability, built between August and September 2026 as a submission to HoloGame by HOLOGY 9.0.

The game is about MBG (Makanan Bergizi Gratis), Kopdes (Koperasi Desa Merah Putih) and SPPG. The player is a farmer who explores a procedurally generated world to find seeds and rare materials, farms the land, and supplies the SPPG with nutritious meals for MBG before the village runs out of food.

Under the hood the game is built on object-oriented programming, with A* pathfinding driving its characters.

Checkout the website -> https://yendeveloper.itch.io/bibitz`,
    href: "bibitz",
  },
  {
    title: "THE LAST SPARK",
    imageUrl: "/images/projects/the-last-spark/cover.webp",
    images: [
      "/images/projects/the-last-spark/1.webp",
      "/images/projects/the-last-spark/2.webp",
      "/images/projects/the-last-spark/3.webp",
    ],
    description: `The Last Spark is a 2D top-down action RPG and my entry for the Compfest IGI (Indie Game Ignite) Game Jam 2025, built around the theme "Exploring the Unknown".

Players are sent by a deity to a mysterious world succumbing to an eternal freeze. With no natural light left, they carry a magical torch, the world's last remaining spark, and must save its inhabitants from the encroaching darkness.

Technically, it is built in Unity and C# on object-oriented principles for clean, modular code. Scriptable Objects decouple data from logic so items, NPCs and enemies are easy to create and manage, and an object pooling system handles projectiles and effects to cut garbage collection and keep gameplay smooth.

Checkout the website -> https://yendeveloper.itch.io/thelastspark`,
    href: "the-last-spark",
  },
  {
    title: "FUNDATION",
    imageUrl: "/images/projects/fundation/cover.webp",
    images: [
      "/images/projects/fundation/1.webp",
    ],
    description: `Fundation is an interactive WebGL tycoon game built with Unity to make financial literacy education fun and accessible, completed as a hackathon project within one week in July 2025.

Our mission was to turn complex financial concepts into an engaging learning experience. The game blends game design with educational goals under a tight deadline, and is embedded into a website built with Next.js.`,
    href: "fundation",
  },
  {
    title: "XCELERATE",
    imageUrl: "/images/projects/xcelerate/main-menu.webp",
    images: [
      "/images/projects/xcelerate/main-menu.webp",
      "/images/projects/xcelerate/main-game.webp",
      "/images/projects/xcelerate/tutorial.webp",
    ],
    description: `XCelerate is a top down real time multiplayer word game for mobile, built by my team and me as a group project for the Amikom game development competition. My role was the sole programmer, so all of the code was mine to design and wire together. The idea was to make learning English and Bahasa Indonesia vocabulary feel like a match you actually want to win instead of studying, where up to five players race around one arena, collect scattered letter tiles to spell a target word, and submit it at a station before the timer runs out.

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
    description: `Nusantara Reborn is a two dimensional nation building simulation game where the player takes over a struggling Indonesia and tries to lead it back toward prosperity. I worked as the only programmer on the team while my teammates handled the design side, so every system in the project was programmed by me. I built the power up draw, the day and night cycle, the unexpected events, the economy, the tax collection, and the user interface, but the feature that pushed me the most is the one I want to focus on here.

The single hardest feature was the AI pathfinding that lets the cars drive around the city on their own while staying on the roads. The difficulty is that Unity's NavMesh system is designed for three dimensional worlds, while Nusantara Reborn is a flat top down two dimensional game, so the standard approach does not simply work. My solution was to adapt the navigation so it behaves correctly on a two dimensional plane, keeping each car sitting flat on the map while the routing still runs underneath it, following the roads and steering around buildings and other cars on its own. Getting the bake, the agent sizes, and the avoidance to feel natural took a lot of trial and error, and it was easily the part of the project that taught me the most.

The journey ran from a single worry all the way to a finished game. My teammate and I started from the concern that the young generation who will one day lead Indonesia rarely get to feel how hard running a country really is, and we shaped that worry into a playable simulation aimed at the idea of Indonesia Emas 2045. From there I built the project up one system at a time, beginning with the time and stat loops, then the buildings and the economy, then the events and the power up draw, and finally the cars and their pathfinding. I tested and iterated until the pieces agreed with one another, produced builds for Windows and macOS, and submitted the finished game to the competition where it was actually played and judged.

The tech stack was Unity 2022.3.62f3 with the Universal Render Pipeline and the two dimensional feature set, and all of the gameplay was written in C#. NavMeshPlus carried the two dimensional navigation, LeanTween handled the user interface animation and transitions, and TextMeshPro handled the text. I wrote the code in Visual Studio Code and used the Unity editor to wire the scriptable objects, scenes, and prefabs together.

In the end the project placed 2nd in the competition, which I am genuinely happy about given that I was the sole programmer on the team. More than the result though, building every system by myself taught me how tightly each one leans on the others, that the time loop, the events, the economy, and the AI all have to agree on the same rules or the whole thing falls apart. The pathfinding in particular taught me to slow down, read the tools carefully, and adapt them to a context they were never built for instead of fighting against them. That patience, along with the habit of checking that a system really works before moving on, is what I will carry into my future projects.

Checkout the website -> https://yendeveloper.itch.io/nusantara-reborn`,
    href: "nusantara-reborn",
  },
];
