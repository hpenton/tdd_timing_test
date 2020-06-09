const { HeadingParser } = require("./HeadingParser");
const parse = (input) => {
  const headingParser = new HeadingParser();
  return headingParser.parse(input);
};

module.exports = parse;
