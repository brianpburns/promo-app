export const getVideoId = (url: string) => {
  const idPattern = /share\/(.*)\?/i;
  const matches = idPattern.exec(url);
  return matches && matches[1];
};
