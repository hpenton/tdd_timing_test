class HeadingParser {
  validateHeading(heading) {
    const trimmedHeading = heading.trim();
    const headingSplit = trimmedHeading.split(" ");

    const reg = new RegExp(/^#*$/);
    return reg.test(headingSplit[0]);
  }
  getHtml(markdown) {
    const trimmedIn = markdown.trim();
    const split = trimmedIn.split("\n");

    let out = "";

    split.forEach((element) => {
      const headingNumHash = element.split(" ");
      const headingNum = headingNumHash[0].length;
      const validity = this.validateHeading(element);
      const rest = headingNumHash.splice(1);
      const restJoined = rest.join(" ");

      out += validity
        ? `<h${headingNum}>${restJoined}</h${headingNum}>`
        : `<p>${element}</p>`;
    });

    return out;
  }
}
module.exports = { HeadingParser };
