function generateMarkdown(data) {
  return `
<img src = "${data.avatar_url}" />
<br>
Licenses: ![license type](https://img.shields.io/badge/License-${data.license}-yellow)
  
  Github UserName: ${data.github}
  ***
  # Repo Name ${data.title} 
  
  ## Description: 
    ${data.desc}
  ***
  ## Contents
  - [Motivation](#Description)
  - [How to install](#Requirements)
  - [How to use](#Usage)
  - [Contributors](#Contributors)
  - [How to test](#Testing)
  - [Additional Info](#Additional)
  - [Licenses](#Licenses)
  ***

  ## Usage: 
  - ${data.usage}

  ## Requirements: 
  **Installations**: ${data.npm}
  <em>Other</em>: ${data.install}
  
  ## Testing: 
  **To test this application:** ${data.test}

  
  ### Contributors: 
  - ${data.contributorRes}
  ### Additional 
  - Contact: ${data.email}
  - GitHub Profile: ${data.html_url}
`;
}
module.exports = generateMarkdown;
