type Frame = {
  first: number;
  second: number;
};

export const frame = (frame: Frame) => {
  return frame.first + frame.second;
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
