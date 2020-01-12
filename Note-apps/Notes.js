const fs = require("fs");
const chalk = require("chalk");

//adding notes
const addNotes = (title, body) => {
    const loadedNotes = loadfile();
    const duplicateTitle = loadedNotes.find(note => note.title === title);
    if (!duplicateTitle) {
        loadedNotes.push({
            title: title,
            body: body
        });
        saveNotes(loadedNotes);
        console.log(chalk.green("Note is added!!!"));
    } else {
        console.log(chalk.yellow("Note title is taken!!!"));
    }
};
//deleting Notes
const deleteNote = title => {
    const loadedNotes = loadfile();
    const checkNoteTitle = loadedNotes.find(
        noteTitle => noteTitle.title === title
    );
    if (checkNoteTitle) {
        saveNotes(checkNoteTitle);
        console.log(chalk.green("Node is deleted"));
    } else {
        console.log(chalk.red("Title Not found"));
    }
};

//Saving Notes
const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

//loading Notes
const loadfile = () => {
    try {
        const readFile = fs.readFileSync("notes.json");
        const readedData = readFile.toString();
        return JSON.parse(readedData);
    } catch (error) {
        return [];
    }
};
//listing the notes
const listNote = () => {
    const loadedNotes = loadfile();
    console.log(chalk.red("Your Notes Title"));
    loadedNotes.forEach(element => {
        console.log(element.title);
    });
};

//reading Title and body assigned by user
const readNote = title => {
    const loadedNotes = loadfile();
    const searchTitle = loadedNotes.find(search => search.title === title);
    if (searchTitle) {
        console.log(chalk.redBright.italic(searchTitle.title));
        console.log(searchTitle.body);
    } else {
        console.log(chalk.red("Incorrect Title"));
    }
};

module.exports = {
    addNotes: addNotes,
    deleteNote: deleteNote,
    listNote: listNote,
    readNote: readNote
};