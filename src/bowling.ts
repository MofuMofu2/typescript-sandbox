type Frame = {
  first: number;
  second: number;
  third?: number;
};

const frameScore = (frame: Frame) => {
  return frame.first + frame.second;
};

export const strike = (pins: Frame[]) => {
  let score = 0;
  for (let frame = 0; frame < pins.length; frame++) {
    let knockedPins = frameScore(pins[frame]);
    const nextFrame = frame + 1;
    const twoFrame = frame + 2;

    if (pins[frame].first === 10) {
      // 10回目かどうか判断する
      if (frame === 9) {
        knockedPins = pins[9].first + pins[9].second + pins[9].third!;
      } else if (pins[nextFrame].first === 10 && frame === 8) {
        // 9投目
        knockedPins += pins[9].first + pins[9].second;
      } else if (pins[nextFrame].first === 10) {
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
