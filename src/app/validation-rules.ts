export const isEmptyField = (value: string | null): boolean => !value;

export const isInvalidCardholder = (name: string): boolean => !/^[A-Za-z -]+$/.test(name);

export const isInvalidNumber = (value: string): boolean => !/^[0-9]+$/.test(value);

export const isInvalidLength = (value: string, length: number): boolean =>
  value.length !== length;

export const isInvalidMonth = (value: string): boolean =>
  Number(value) === 0 || Number(value) > 12;
