const { HeadingParser } = require("./HeadingParser");

describe("Heading parser tests", () => {
  test("The parser is of type heading parser", () => {
    const headingParser = new HeadingParser();
    expect(headingParser).toBeInstanceOf(HeadingParser);
  });
  test("the heading parser can show whether a string is an invalid heading", () => {
    const headingParser = new HeadingParser();

    expect(headingParser.validateHeading("#abc")).toBeFalsy();
  });
  test("the heading parser can work out if a heading is valid", () => {
    const headingParser = new HeadingParser();

    expect(headingParser.validateHeading("# abc")).toBeTruthy();
  });
  test("the heading parser can take spaces before a hash too", () => {
    const headingParser = new HeadingParser();

    expect(headingParser.validateHeading(" # abc")).toBeTruthy();
  });
  test("the heading parser can deal with headings of multiple words", () => {
    const headingParser = new HeadingParser();
    const markdown = "# abc def";
    expect(headingParser.getHtml(markdown)).toEqual("<h1>abc def</h1>");
  });

  test("the heading parser can wrap a valid h1 heading in a heading tag", () => {
    const headingParser = new HeadingParser();
    const markdown = "# abc";
    expect(headingParser.getHtml(markdown)).toEqual("<h1>abc</h1>");
  });
  test("the heading parser can wrap a valid h2 heading in a heading tag", () => {
    const headingParser = new HeadingParser();
    const markdown = "## abc";
    expect(headingParser.getHtml(markdown)).toEqual("<h2>abc</h2>");
  });
  test("the heading markdown parser can validate a heading a return an invalid heading as a p", () => {
    const markdown = "##abc";
    const headingParser = new HeadingParser();

    expect(headingParser.getHtml(markdown)).toEqual("<p>##abc</p>");
  });
});
