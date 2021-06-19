import '@testing-library/jest-dom';

// add match media to jsdom
const mockMatchMedia = () => ({
  matches: false,
  addListener() {},
  removeListener() {},
});
window.matchMedia = window.matchMedia || mockMatchMedia;
