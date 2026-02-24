export const stringContainsOnlyLettersAndNumbers = (
  str: string,
  allowUnderscores?: boolean,
): boolean => {
  const regex = allowUnderscores ? /^[A-Za-z0-9_]+$/ : /^[A-Za-z0-9]+$/;
  return regex.test(str);
};
