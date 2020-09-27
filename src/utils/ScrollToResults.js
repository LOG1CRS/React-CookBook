const ScrollToResults = (objectId) => {
  const resultsView = document.querySelector(`#${objectId}`);

  if (resultsView) {
    resultsView.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    console.error('From ScrollToResults: Results Component not found!');
  }
};

export default ScrollToResults;
