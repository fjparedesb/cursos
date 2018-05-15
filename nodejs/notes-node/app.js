console.log('Initializing app');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];

if (command === 'add'){
	console.log('Adding a note');
} else if (command === 'list') {
	console.log('Listing all notes');
} else if (command === 'read'){
	console.log('Reading a note');
} else if (command === 'remove'){
	console.log('Deleting a note');
} else {
	console.log('Command not recognized');
}
