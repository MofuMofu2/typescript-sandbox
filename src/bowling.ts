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

export const spare = (pins: Frame[]) => {
  let score = 0;
  let isSpare = false;
  for (const pin of pins) {
    if (isSpare) {
      score += pin.first;
    }
    isSpare = false;
    const knockedPins = frame(pin);
    if (knockedPins === 10) {
      isSpare = true;
    }
    score += knockedPins;
  }
  return score;
};
