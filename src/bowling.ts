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
  const nextFrame = frame + 1;
  const twoFrame = frame + 2;

  // 10フレーム目は最大3投できるため、最後のフレームの結果を全て足して返す
  if (frame === pins.length - 1) {
    let lastFrame = 0;
    for (const value of Object.values(pins[pins.length - 1])) {
      lastFrame += value;
    }
    return lastFrame;
  }

  // 9フレーム目は10フレーム目の初回と2投目の結果を足す
  if (isStrike(pins[nextFrame].first) && frame === pins.length - 2) {
    return pins[pins.length - 1].first + pins[pins.length - 1].second;
  }

  // 1〜8フレーム目は次のフレームの1投目と2投目の結果を足す
  if (isStrike(pins[nextFrame].first)) {
    return pins[nextFrame].first + pins[twoFrame].first;
  }

  return frameScore(pins[nextFrame]);
};
