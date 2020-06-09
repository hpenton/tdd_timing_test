const parse = require("./index");
const { inputMarkdown, outputHtmlString } = require("./testData");
describe("completion test", () => {
  test("it works", () => {
    expect(parse(inputMarkdown)).toEqual(outputHtmlString);
  });
});
