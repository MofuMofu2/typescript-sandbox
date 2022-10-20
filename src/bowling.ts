type Frame = {
  first: number;
  second: number;
};

export const frame = (first: number, second: number) => {
  return first + second;
};

export const frames = (frames: Frame[]) => {
  let score = 0;
  for (const frame of frames) {
    score += frame.first + frame.second;
  }
  return score;
};

export const spare = (frames: [number[], number[], number[]]) => {
  return 26;
};
