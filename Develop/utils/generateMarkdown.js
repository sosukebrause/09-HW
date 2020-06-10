function generateMarkdown(data) {
  console.log(data.avatar_url);

  return `
  # GitHub Name:  ${data.github} 
  ## Repo Name: ${data.title} 
  ## License: ${data.license}
  ## Description: 
  ${data.desc}
  Email: ${data.email}
<img src = "${data.avatar_url}" />
`;
}
module.exports = generateMarkdown;
