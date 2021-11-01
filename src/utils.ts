const checkUpperCase = (str: string): number => {
  let result = 0;
  str.split('').forEach((letter: string) => {
    if (letter.toUpperCase() === letter) result += 1;
  });
  return result;
};

export default checkUpperCase;
