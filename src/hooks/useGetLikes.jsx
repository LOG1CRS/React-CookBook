import { useEffect, useRef } from 'react';

const useGetLikes = (loopValue, maxValue, valueGap, page) => {
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

    getLikes(loopValue, maxValue, valueGap);
  }, [page]);

  return [likesValues, lastMaxValue];
};

export default useGetLikes;
