function generateMarkdown(data) {
  return `
# ${data.title}
# ${data.license}

`;
}

module.exports = generateMarkdown;
