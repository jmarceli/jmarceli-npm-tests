export const sumAll = (...args) => {
  return args.reduce((acc, val) => acc + val, 0);
};
