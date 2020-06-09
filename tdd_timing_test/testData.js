const inputMarkdown = `
 # Heading one
##Heading two
### Heading three
#### Heading four
##### Heading five
###### Heading six
`;

const outputHtmlString = `<h1>Heading one</h1><p>##Heading two</p><h3>Heading three</h3><h4>Heading four</h4><h5>Heading five</h5><h6>Heading six</h6>`;

module.exports = { inputMarkdown, outputHtmlString };
