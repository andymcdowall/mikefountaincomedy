export interface Video {
  youtubeId: string;
  title: string;
  description?: string;
}

// TODO: Replace with real YouTube video IDs and titles
export const videos: Video[] = [
  {
    youtubeId: "dQw4w9WgXcQ",
    title: "Mike Fountain — Live at The Featherbone Factory",
    description: "Full set from Comedy on the Rocks, Three Oaks MI.",
  },
  {
    youtubeId: "9bZkp7q19f0",
    title: "Mike Fountain — Clip Reel",
    description: "Highlights from recent performances.",
  },
  {
    youtubeId: "kJQP7kiw5Fk",
    title: "Mike Fountain — Late Night Appearance",
    description: "Spot on Midnight Laughs with host Terry Boone.",
  },
  {
    youtubeId: "OPf0YbXqDm0",
    title: "Mike Fountain — Audience Q&A",
    description: "Taking questions after the show in Grand Rapids.",
  },
];
