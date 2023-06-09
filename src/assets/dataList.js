import { capAll } from "./utils";

export const SearchResults = [
  {
    search: "Apple",
    clicked: false,
  },
  {
    search: "Mac",
    clicked: false,
  },
  {
    search: "David Beckham",
    clicked: true,
  },
  {
    search: "Beckham",
    clicked: false,
  },
  {
    search: "Zebra",
    clicked: true,
  },
  {
    search: "Apps",
    clicked: true,
  },
  {
    search: "Becks",
    clicked: false,
  },
  {
    search: "Boris Becker",
    clicked: true,
  },
  {
    search: "Computer",
    clicked: false,
  },
  {
    search: "David Dunk",
    clicked: false,
  },
  {
    search: "Masters",
    clicked: false,
  },
  {
    search: "Golf",
    clicked: false,
  },
  {
    search: "Soccer",
    clicked: false,
  },
  {
    search: "Hockey",
    clicked: true,
  },
  {
    search: "Sports",
    clicked: false,
  },
  {
    search: "Rahm",
    clicked: true,
  },
  {
    search: "Scottie",
    clicked: false,
  },
  {
    search: "Hads",
    clicked: false,
  },
  {
    search: "Sam Bennet",
    clicked: true,
  },
  {
    search: "Sam Pausha",
    clicked: false,
  },
  {
    search: "Augusta",
    clicked: true,
  },
];

let listOfWords = [
  "blushing",
  "disappear",
  "plan",
  "beds",
  "seat",
  "moor",
  "celery",
  "rob",
  "rainy",
  "hurry",
  "unusual",
  "fat",
  "rightful",
  "nervous",
  "adhesive",
  "phone",
  "stick",
  "tangible",
  "possible",
  "temporary",
  "shiny",
  "determined",
  "innate",
  "spooky",
  "shake",
  "love",
  "tin",
  "panicky",
  "cowardly",
  "fascinated",
  "tiger",
  "feeble",
  "window",
  "disgusted",
  "float",
  "jump",
  "miniature",
  "imperfect",
  "horrible",
  "crazy",
  "fragile",
  "enthusiastic",
  "ocean",
  "impulse",
  "noxious",
  "acceptable",
  "quirky",
  "equal",
  "maid",
  "soak",
  "craven",
  "van",
  "decide",
  "planes",
  "terrible",
  "easy",
  "travel",
  "loss",
  "mere",
  "support",
  "lewd",
  "sparkling",
  "seal",
  "horses",
  "aback",
  "quizzical",
  "tame",
  "disturbed",
  "wipe",
  "awake",
  "dramatic",
  "effect",
  "authority",
  "middle",
  "plate",
  "river",
  "cooperative",
  "snobbish",
  "incredible",
  "beef",
  "exclusive",
  "fuel",
  "coal",
  "toe",
  "moan",
  "stimulating",
  "church",
  "rhyme",
  "supreme",
  "nut",
  "club",
  "receptive",
  "melted",
  "paper",
  "safe",
  "lucky",
  "star",
  "excellent",
  "smell",
  "button",
];

listOfWords.map((val) => {
  SearchResults.push({ search: capAll(val), clicked: false });
});
