var yargs = require('yargs');
var work = require('./work.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        var title = argv.title;
        var body = argv.body;
        work.addNote(title, body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        var title = argv.title;
        console.log(title);
        work.removeNote(title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: () => {
        work.listOfNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        var title = argv.title;
        work.readNotes(title);
    }
})

console.log(yargs.argv);