
function renderLicenseBadge(license) {
    let licenseType = license
    let badge = ''
    if(licenseType === 'MIT') {
        badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    }
    else if (licenseType === 'Eclipse') {
        badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    }
    else if (licenseType === 'BSD 2-Clause License') {
        badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    }
    else if (licenseType === 'BSD 3-Clause License') {
        badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    }
    else if (licenseType === 'Boost Software License 1.0') {
        badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    }
    else if (licenseType === 'Apache 2.0 License') {
        badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    }
    else {
        badge = 'N/A'
    }
    return badge;
};

module.exports = readmedata => {
    const { projectName, description, usage, license, contributing, tests, github, email} = readmedata;

    return `
    # ${projectName}
    ${renderLicenseBadge(license)}
    ## Description
    ${description}
    
    ## Table Of Contents
      * [Usage](#usage)
      * [License](#license)
      * [Contributing](#contributing)
      * [Tests](#tests)
      * [Questions](#questions)
    
    ## Usage
    ${usage}
    
    ## License
    Licensed under the ${renderLicenseBadge(license)} license.
    
    ## Contributing
    ${contributing}
    
    ## Tests
    ${tests}

    ## Questions
    Contact me:
      <p align=center>[${github}](https://github.com/${github})github link: </p>
      <p align=center>Email address:${email}</p>
  `;
};