export interface Video {
  youtubeId: string;
  title: string;
  description?: string;
}

export const videos: Video[] = [
  // TODO: Replace with real YouTube video IDs
  {
    youtubeId: "dQw4w9WgXcQ",
    title: "Mike Fountain — Live at The Featherbone Factory",
    description: "Full set from Comedy on the Rocks, Three Oaks MI.",
  },
  {
    youtubeId: "dQw4w9WgXcQ",
    title: "Mike Fountain — Clip Reel",
    description: "Highlights from recent performances.",
  },
];
