let fs = require("fs");
let inquirer = require("inquirer");
let licenses = require("./licenses.js");

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please add a description to your README.",
      name: "description",
    },
    {
      type: "input",
      message: "Please describe how to install the project.",
      name: "installation",
    },
    {
      type: "input",
      message: "How do you use the project?",
      name: "use",
    },
    {
      type: "input",
      message: "Who or what helped contribute to the project?",
      name: "contributions",
    },
    {
      type: "input",
      message: "Please provide test instructions.",
      name: "test",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "list",
      message: "Which License to you choose?",
      choices: ["MIT", "GNU"],
      name: "license",
    },
  ])
  .then((response) => {
    // console.log(response);
    // console.log(response.title);
    // console.log(response.description);
    // console.log(response.installation);
    // console.log(response.use);
    // console.log(response.contributions);
    // console.log(response.test);

    const fileName = `${response.title.split(" ").join("").toLowerCase()}.md`;
    console.log(fileName);
    fs.appendFile(
      `./documents/${fileName}`,
      JSON.parse(
        JSON.stringify(
          //   `${licenses[response.license.toLowerCase() + "Badge"]}\n# ${
          //     response.title
          //   }\n## Description\n${response.description}\n## Installation\n${
          //     response.installation
          //   }\n## Usage\n${response.use}\n## Contributing\n${
          //     response.contributions
          //   }\n## Questions\n[GitHub](https://github.com/${
          //     response.username
          //   })\n  ${response.email}\n## Tests\n${response.test}\n## License\n${
          //     licenses[response.license.toLowerCase()]
          //   }
          //   `
          `${licenses[response.license.toLowerCase() + "Badge"]}\n${
            response.title ? `# ${response.title}` : ""
          }\n${
            response.description
              ? `## Description\n${response.description}`
              : ""
          }\n${
            response.installation
              ? `## Installation\n${response.installation}`
              : ""
          }\n${response.use ? `## Usage\n${response.use}` : ""}\n${
            response.contributions
              ? `## Contributing\n${response.contributions}`
              : ""
          }\n${response.test ? `## Tests\n${response.test}` : ""}\n${
            response.username || response.email
              ? `## Questions\n[GitHub](https://github.com/${response.username})`
              : ""
          }\n${response.email}\n${
            response.license
              ? `## License\n${licenses[response.license.toLowerCase()]}`
              : ""
          }
          `
        )
      ),
      (err) => {
        err ? console.log(err) : console.log("success!");
      }
    );
  });
