import { useEffect, useRef } from 'react';

const useGetLikes = (loopValue, maxValue, valueGap) => {
  const likesValues = [];
  const lastMaxValue = useRef();

  for (let i = 0; i < loopValue; i++) {
    let minValue = maxValue - valueGap;
    let likes = Math.floor(Math.random() * (maxValue - minValue)) + minValue;

    if (likes < 0) {
      likes = 0;
    }

    maxValue = likes;
    likesValues.push(likes);
  }
  lastMaxValue.current = maxValue;

  return [likesValues, lastMaxValue];
};

export default useGetLikes;
