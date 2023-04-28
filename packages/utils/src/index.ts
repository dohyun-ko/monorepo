export const padStart = (str: string, length: number, pad: string = "0") => {
  while (str.length < length) {
    str = pad + str;
  }
  return str;
};

export const sumList = (list: number[]) => {
  return list.reduce((a, b) => a + b, 0);
};
