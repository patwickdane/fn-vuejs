export const makeTitleCase = (text: string) => {
  if (!text) return text;

  return text
    .split(" ")
    .map((word: string) => {
      return `${word[0].toUpperCase()}${word.slice(1)}`;
    })
    .join(" ");
};
