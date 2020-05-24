//do all work related to notesapp
var fs = require('fs');
var notesFile = 'notes.json';

var addNote = (title, body) => {
    var notes = loadNotes();
    var ifNoteExists = notes.filter( (note) => {
        return note.title == title;
    })
    if (ifNoteExists.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('note added');
    } else {
        console.log('cannot add node');
    }
}

var removeNote =  (title) => {
    var notes = loadNotes();
    var notesToKeep = notes.filter( (note) => {
        return note.title !== title;
    })
    if (notes.length > notesToKeep.length) {
        console.log(notesToKeep);
        saveNotes(notesToKeep);
        console.log('note removed !!')
    } else {
        console.log('Nothing deleted!')
    }

}

var listOfNotes =  () => {
    var notes = loadNotes();
    notes.forEach((note) => console.log(note.title))
}

var readNotes =  (title) => {
    var notes = loadNotes();
    var note = notes.find((note) => {
        return note.title === title;
    })
    if (note) {
        console.log('title: ' + note.title + ' body: ' + note.body)
    } else {
        console.log('Not Found!!');
    }
}

var loadNotes =  () => {
    try {
        var buf = fs.readFileSync(notesFile);
        var dataJSON = buf.toString();
        console.log(dataJSON);
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

function saveNotes(notes) {
    var dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listOfNotes: listOfNotes,
    readNotes: readNotes
}
