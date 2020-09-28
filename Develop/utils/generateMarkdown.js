function generateMarkdown(data) {
  console.log(data.avatar_url);

  return `
<img src = "${data.avatar_url}" />

  # GitHub Name:  ${data.github} 
  ## Repo Name (project title): ${data.title}
  - Repos: ${data.url} 
  ## Description: 
    ${data.desc}
  ## Requirements: 
  - License: ${data.license}
  - Installation requirements: ${data.install}
  - Node packages: ${data.npm}
  ## Usage: 
  - ${data.usage}
  ### Contributors: ${data.contributorRes}
    ### Email: ${data.email}
  
`;
}
module.exports = generateMarkdown;
