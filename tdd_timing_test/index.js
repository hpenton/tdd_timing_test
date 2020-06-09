const { HeadingParser } = require("./HeadingParser");
const parse = (input) => {
  const headingParser = new HeadingParser();
  return headingParser.getHtml(input);
};

module.exports = parse;
