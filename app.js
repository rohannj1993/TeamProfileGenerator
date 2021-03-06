const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


let employees = [];

function positionFinder() {
  inquirer
    .prompt({
      type: `list`,
      name: `employeePosition`,
      message: `What position do you want to add?`,
      choices: [`Team Manager`, `Engineer`, `Intern`]
    })
    .then(companyPosition => {
      if (companyPosition.employeePosition === `Team Manager`) {
        teamManager()
      } else if (companyPosition.employeePosition === `Engineer`) { teamEngineer() }
      else if (companyPosition.employeePosition === `Intern`) { teamIntern() }
    })
}

function teamManager() {
  inquirer
    .prompt(
      [
        {
          type: `input`,
          name: `employeeName`,
          message: `What is your Full Name`,
        },
        {
          type: `input`,
          name: `employeeID`,
          message: 'What is your employee Id?'
        },
        {
          type: `input`,
          name: `managerEmail`,
          message: `What is your email?`,
        },
        {
          type: `input`,
          name: 'officeNumber',
          message: `What is your office number?`
        }
      ]
    ).then((answers) => {
      console.log(answers)
    })
}


function teamEngineer() {
  inquirer
    .prompt(
      [
        {
          type: `input`,
          name: `employeeName`,
          message: `What is your Full Name`,
        },
        {
          type: `input`,
          name: `employeeID`,
          message: 'What is your employee Id?'
        },
        {
          type: `input`,
          name: `engineerEmail`,
          message: `What is your email?`,
        },
        {
          type: `input`,
          name: 'githubAccount',
          message: `What is your github account?`
        }
      ]
    ).then((answers) => {
      console.log(answers)
    })
}


function teamIntern() {
  inquirer
    .prompt(
      [
        {
          type: `input`,
          name: `employeeName`,
          message: `What is your Full Name`,
        },
        {
          type: `input`,
          name: `employeeID`,
          message: 'What is your employee Id?'
        },
        {
          type: `input`,
          name: `Email`,
          message: `What is your email?`,
        },
        {
          type: `input`,
          name: 'collegeName',
          message: `Where did you go to college?`
        }
      ]
    ).then((answers) => {
      console.log(answers)
    })
}

positionFinder()



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ``` 

