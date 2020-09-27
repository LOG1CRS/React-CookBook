const ScrollToResults = (objectId, block) => {
  const resultsView = document.querySelector(`#${objectId}`);

  if (block === undefined) {
    block = 'center';
  }

  if (resultsView) {
    resultsView.scrollIntoView({ behavior: 'smooth', block: block });
  } else {
    console.error('From ScrollToResults: Results Component not found!');
  }
};

export default ScrollToResults;
