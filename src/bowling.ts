type Frame = {
  first: number;
  second: number;
  third?: number;
};

export const calcScore = (pins: Frame[]) => {
  let score = 0;
  for (let frame = 0; frame < pins.length; frame++) {
    let knockedPins = frameScore(pins[frame]);
    const nextFrame = frame + 1;
    if (isStrike(pins[frame].first)) {
      if (frame === pins.length - 1) {
        knockedPins = strike(pins, frame);
      } else {
        knockedPins += strike(pins, frame);
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

const strike = (pins: Frame[], frame: number) => {
  let knockedPins = 0;
  const nextFrame = frame + 1;
  const twoFrame = frame + 2;

  // 10フレーム目は最大3投できるため、最後のフレームの結果を全て足して返す
  if (frame === pins.length - 1) {
    let lastFrame = 0
    for (const value of Object.values(pins[pins.length - 1])) {
      lastFrame += value
    }
    return lastFrame
  } else if (isStrike(pins[nextFrame].first) && frame === pins.length - 2) {
    // 9投目
    knockedPins += pins[pins.length - 1].first + pins[pins.length - 1].second;
  } else if (isStrike(pins[nextFrame].first)) {
    knockedPins += pins[nextFrame].first + pins[twoFrame].first;
  } else {
    knockedPins += frameScore(pins[nextFrame]);
  }
  return knockedPins;
};
