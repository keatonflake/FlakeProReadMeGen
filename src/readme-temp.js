
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
        badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    }
    else if (licenseType === 'BSD 3-Clause License') {
        badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
    else if (licenseType === 'Boost Software License 1.0') {
        badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
    else if (licenseType === 'Apache 2.0 License') {
        badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
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
[gitHub Link Here](https://github.com/${github})
${email}
`;
};