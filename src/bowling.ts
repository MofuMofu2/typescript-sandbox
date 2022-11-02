type Frame = {
  first: number;
  second: number;
  third?: number;
};

export const strike = (pins: Frame[]) => {
  let score = 0;
  for (let frame = 0; frame < pins.length; frame++) {
    let knockedPins = frameScore(pins[frame]);
    const nextFrame = frame + 1;
    const twoFrame = frame + 2;

    if (isStrike(pins[frame].first)) {
      // 10回目かどうか判断する
      if (frame === pins.length - 1) {
        knockedPins = pins[pins.length - 1].first + pins[pins.length - 1].second + pins[pins.length - 1].third!;
      } else if (isStrike(pins[nextFrame].first) && frame === (pins.length - 2)) {
        // 9投目
        knockedPins += pins[pins.length - 1].first + pins[pins.length - 1].second;
      } else if (isStrike(pins[nextFrame].first)) {
        knockedPins += pins[nextFrame].first + pins[twoFrame].first;
      } else {
        knockedPins += frameScore(pins[nextFrame]);
      }
    } else if (knockedPins === 10) {
      score += pins[nextFrame].first;
    }
    score += knockedPins;
  }

  return score;
};

const frameScore = (frame: Frame) => {
  return frame.first + frame.second;
};

const isStrike = (firstShot: number) => {
  return firstShot === 10;
};
