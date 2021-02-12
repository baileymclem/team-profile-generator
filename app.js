const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        }
    ]).then((data) => {
        const newManager = new Manager(data.managerName, data.id, data.email, data.officeNumber);
        teamMembers.push(newManager);
        moreMembers();
    });
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github?"
        }
    ]).then((data) => {
        const newengineer
            = new Engineer
                (data.engineerName, data.id, data.email, data.github);
        teamMembers.push(newengineer
        );
        moreMembers();
    });
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        }
    ]).then((data) => {
        const newIntern = new Intern(data.internName, data.id, data.email, data.school);
        teamMembers.push(newIntern);
        moreMembers();
    });
}

let teamMembers = [];

createManager();

function moreMembers() {
    inquirer.prompt([{
        type: "list",
        name: "moreMembers",
        message: "Do you want to add more members?",
        choices: ["Engineer", "Intern", "No more members"],
    }])
        .then(function (data) {
            if (data.moreMembers === "Engineer") {
                createEngineer();

            } else if (data.moreMembers === "Intern") {
                createIntern();
            } else {
                buildTeam();
            }
        });
}

function buildTeam() {
    fs.writeFile(outputPath, render(teamMembers), (err) => {
        if (err) throw err;
        console.log('Yeah team!');

    });
}