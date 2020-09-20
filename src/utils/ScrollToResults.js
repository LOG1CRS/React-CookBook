const ScrollToResults = () => {
  const resultsView = document.querySelector('#results-view');

  if (resultsView) {
    resultsView.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    console.error('From ScrollToResults: Results Component not found!');
  }
};

export default ScrollToResults;
