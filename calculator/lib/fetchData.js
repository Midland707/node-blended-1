const [operator, ...argv] = process.argv.slice(2);
const numbers = argv.map((num) => Number(num));

module.exports = { operator, numbers };
