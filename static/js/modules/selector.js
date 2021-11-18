const selector = (selectorReference, selectorMethod) => {
  return document[`${selectorMethod}`](selectorReference);
};

export default selector;
