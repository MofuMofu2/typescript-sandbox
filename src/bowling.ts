type Frame = {
  first: number;
  second: number;
  third?: number;
};

export const frameScore = (frame: Frame) => {
  return frame.first + frame.second;
};

export const frames = (frames: Frame[]) => {
  let score = 0;
  for (const pins of frames) {
    score += frameScore(pins);
  }
  return score;
};

export const spare = (pins: Frame[]) => {
  let score = 0;
  let isSpare = false;
  for (const pin of pins) {
    if (isSpare) {
      score += pin.first;
    isSpare = false;
    }
    const knockedPins = frameScore(pin);
    isSpare = knockedPins === 10;
    score += knockedPins;
  }
  return score;
};

export const strike = (pins: Frame[]) => {
  let score = 0;
  let isStrike = false;
  for (const pin of pins) {
    if (isStrike) {
      score += frame(pin);
    }
    isStrike = false;
    const knockedPins = frame(pin);
    if (pin.first === 10) {
      isStrike = true;
    }
    score += knockedPins;
  }
  return score;
};
