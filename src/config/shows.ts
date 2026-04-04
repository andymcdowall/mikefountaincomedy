export interface Show {
  date: string; // ISO 8601, e.g. "2025-06-14"
  venue: string;
  city: string;
  state: string;
  ticketUrl: string;
  soldOut?: boolean;
}

export const shows: Show[] = [
  // TODO: Add real show dates
  {
    date: "2025-06-14",
    venue: "The Featherbone Factory",
    city: "Three Oaks",
    state: "MI",
    ticketUrl: "https://example.com/tickets",
  },
  {
    date: "2025-07-04",
    venue: "Laughs Comedy Club",
    city: "Chicago",
    state: "IL",
    ticketUrl: "https://example.com/tickets",
    soldOut: true,
  },
  {
    date: "2025-08-22",
    venue: "The Punchline",
    city: "San Francisco",
    state: "CA",
    ticketUrl: "https://example.com/tickets",
  },
];
