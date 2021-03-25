let fs = require("fs");
let inquirer = require("inquirer");

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
      JSON.stringify(response),
      (err) => {
        err ? console.log(err) : console.log("success!");
      }
    );
  });
