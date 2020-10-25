const getLikes = (loopValue, maxValue, valueGap) => {
  const likesValues = [];

  for (let i = 0; i < loopValue; i++) {
    let minValue = maxValue - valueGap;
    let likes = Math.floor(Math.random() * (maxValue - minValue)) + minValue;

    if (likes < 0) {
      likes = 0;
    }

    maxValue = likes;
    likesValues.push(likes);
  }
  const lastMaxValue = maxValue;

  return [likesValues, lastMaxValue];
};

export default getLikes;
