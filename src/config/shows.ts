export interface Show {
  date: string; // ISO 8601, e.g. "2025-06-14"
  venue: string;
  city: string;
  state: string;
  ticketUrl: string;
  soldOut?: boolean;
}

export const shows: Show[] = [
  // TODO: Replace with real show dates and ticket links
  {
    date: "2025-06-14",
    venue: "The Featherbone Factory",
    city: "Three Oaks",
    state: "MI",
    ticketUrl: "https://example.com/tickets/featherbone",
  },
  {
    date: "2025-07-04",
    venue: "Laughs Comedy Club",
    city: "Chicago",
    state: "IL",
    ticketUrl: "https://example.com/tickets/laughs",
    soldOut: true,
  },
  {
    date: "2025-08-22",
    venue: "The Punchline",
    city: "San Francisco",
    state: "CA",
    ticketUrl: "https://example.com/tickets/punchline",
  },
  {
    date: "2025-09-13",
    venue: "Comedy Bar",
    city: "Toronto",
    state: "ON",
    ticketUrl: "https://example.com/tickets/comedybar",
  },
  {
    date: "2025-10-31",
    venue: "Stand Up NY",
    city: "New York",
    state: "NY",
    ticketUrl: "https://example.com/tickets/standupny",
    soldOut: true,
  },
];
