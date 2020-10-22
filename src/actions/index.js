export default {
  add: (value) => ({ num }) => ({ num: num + 1 }),
  sub: (value) => ({ num }) => ({ num: num - 1 }),
};
