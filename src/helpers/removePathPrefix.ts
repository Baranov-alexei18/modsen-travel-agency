export const removePathPrefix = (url:string, path:string) => {
  const index = url.indexOf(path);
  return index !== -1 ? url.substring(index) : url;
};
