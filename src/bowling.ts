type Frame = {
  first: number;
  second: number;
};

export const frame = (frame: Frame) => {
  return frame.first + frame.second;
};

export const frames = (frames: Frame[]) => {
  let score = 0;
  for (const pins of frames) {
    score += frame(pins);
  }
  return score;
};

export const spare = (frames: Frame[]) => {
  return 26;
};
