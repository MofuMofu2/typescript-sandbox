type PoemWithPages = {
  name: string;
  pages: number;
  type: "pages";
};

type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
  type: "rhymes";
};

type Poem = PoemWithPages | PoemWithRhymes;

const poem: Poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" };
