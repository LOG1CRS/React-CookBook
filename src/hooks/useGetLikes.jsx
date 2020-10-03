import { useEffect, useRef } from 'react';

const useGetLikes = () => {
  const likesValues = [];
  const lastMaxValue = useRef();

  useEffect(() => {
    const getLikes = (loopValue, maxValue, valueGap) => {
      for (let i = 0; i < loopValue; i++) {
        let minValue = maxValue - valueGap;
        let likes =
          Math.floor(Math.random() * (maxValue - minValue)) + minValue;
        maxValue = likes;
        likesValues.push(likes);
      }
      lastMaxValue.current = maxValue;
    };

    getLikes(12, 30000, 1000);
  }, [likesValues]);

  return [likesValues, lastMaxValue];
};

export default useGetLikes;
