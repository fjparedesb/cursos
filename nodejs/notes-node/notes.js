console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('note-data.json');
        return JSON.parse(notesString);
    } catch (error) {
     return [];   
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };   

    var duplicatenotes = notes.filter((note) => note.title === title);

    if (duplicatenotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }   
};

var getAll = () => {
    return fetchNotes();
}

var getNote = (title) => {
    var notes = fetchNotes();
    var readnotes = notes.filter((note) => note.title === title);
    return readnotes;
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var newnotes = notes.filter((note) => note.title !== title);
    saveNotes(newnotes);
    return notes.length !== newnotes.length;
}

var logNote = (note) => {
    console.log("---");
    console.log(`Titulo: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
