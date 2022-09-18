
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
      {
        type: 'input',
        message: 'Enter Title of project:',
        name: 'title',
      },
    {
      type: 'input',
      message: 'Enter Description of Project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter Installation information:',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter Usage information:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Enter License:',
        name: 'license',
        choices:["Apache 2.0 License","Boost Software License 1.0","BSD 3-Clause License","BSD 2-Clause License", "No License"]
      },
      {
        type: 'input',
        message: 'Enter Contributing guidelines:',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Enter Test instructions:',
        name: 'test',
      },
      {
        type: 'input',
        message: 'Enter Github username:',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Enter email address \n(Note make sure you type it correctly, there is no confirmation of a valid address):',
        name: 'email',
      },
      
  ]).then((response) => {
  fs.promises.writeFile("README.md", createReadMe(response));
  });

function createReadMe(res){
  if(res.license=="Apache 2.0 License"){
    res.license="[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(res.license=="Boost Software License 1.0"){
    res.license="[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  else if(res.license=="BSD 3-Clause License"){
    res.license="[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  else if(res.license=="BSD 2-Clause License"){
    res.license="[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  }
  else{
    res.license="N/A"
  }
  file=
    "#" + res.title +

    "\n\n## Description \n" +

    res.description +

    "\n\nTable of Contents\n" +

    "- [Installation](#installation)\n"+
    "- [Usage](#usage)\n"+
    "- [Credits](#credits)\n"+
    "- [License](#license)\n"+
    "- [Questions](#questions)\n\n"+

    "## Installation\n\n"+

    res.installation+
  
    "\n\n## Usage\n\n"+

    res.usage+

    "\n\nINPUT EXAMPLE IMAGES HERE\n\n"+

    "## Credits\n\n"+

    res.contributing+

    "\n\n## License\n\n"+

    res.license+


    "\n\n## Questions\n\n"+

    "Any Questions? Contact me! \n\n"+

    "GitHub: #github.com/"+res.username+
    "\nEmail: "+res.email
  






return file;
}

