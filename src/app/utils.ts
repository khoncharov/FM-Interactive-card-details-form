export const isNotEmptyStr = (value: string): boolean => Boolean(value.length);

export const formatCardNumber = (value: string): string => {
  const lettersArray = value.split('');

  const result: string[] = [];
  const a: string[] = [];

  const last = lettersArray.reduce((acc, item) => {
    if (acc.length < 4) {
      acc.push(item);
    } else {
      result.push(acc.join(''));
      acc.length = 0;
      acc.push(item);
    }
    return acc;
  }, a);

  result.push(last.join(''));

  return result.join(' ');
};

export const deleteSpaces = (value: string): string => value.trim().split(' ').join('');

export const prependZero = (value: string): string =>
  value.length === 1 ? `0${value}` : value;
