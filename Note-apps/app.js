const fs = require("fs");
const notes = require("./Notes.js");
const yargs = require("yargs");

yargs.command({
    command: "add",
    description: "Adding a Note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        notes.addNotes(argv.title, argv.body);
    }
});
//remove Commands
yargs.command({
    command: "delete",
    description: "Deleting notes",
    builder: {
        title: {
            describe: "delete Node",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        notes.deleteNote(argv.title);
    }
});
yargs.command({
    command: "list",
    handler: () => {
        notes.listNote();
    }
});
yargs.command({
    command: "read",
    handler: argv => {
        notes.readNote(argv.title);
    }
});
yargs.parse();