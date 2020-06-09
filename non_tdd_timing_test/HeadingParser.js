class HeadingParser {
  headingIsValid(heading) {
    const trimmedHeading = heading.trim();
    const headingSplit = trimmedHeading.split(" ");

    const reg = new RegExp(/^#*$/);

    return reg.test(headingSplit[0]);
  }
  parse(markdown) {
    let thisMarkdown = markdown;
    const splitMarkdown = thisMarkdown.trim().split("\n");
    let out = "";
    splitMarkdown.forEach((element) => {
      const elementSplit = element.split(" ");
      const noHash = elementSplit.splice(1).join(" ");
      const isValid = this.headingIsValid(element);
      out += isValid
        ? `<h${elementSplit[0].length}>${noHash}</h${elementSplit[0].length}>`
        : `<p>${element}</p>`;
    });
    return out;
  }
}
module.exports = { HeadingParser };
