export const nameShorten = (name: string, length: number = 40) => {
  if (name.length > length) {
    return name.slice(0, length) + "...";
  }

  return name;
};
