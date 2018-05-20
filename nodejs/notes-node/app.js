//console.log('Initializing app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleoptions = {
	describe: 'titulo de la nota',
	demand: true,
	alias: 't'
};

const bodyoptions = {
	describe: 'de que trata la nota',
	demand: true,
	alias: 'b'
};

const argv = yargs
.command('add', 'agregar una nota nueva', {
	title: titleoptions,
	body: bodyoptions
})
.command('list', 'Listado de todas las notas')
.command('read', 'Lee una nota por el titulo', {
	title: titleoptions
})
.command('remove', 'Elimina una nota por el titulo', {
	title: titleoptions
})
.help()
.argv;
var command = argv._[0];
//console.log(command);
//console.log('Yargs', argv);

if (command === 'add'){
	var note = notes.addNote(argv.title, argv.body);
	if (note){
		console.log("Se creo correctamente");
		notes.logNote(note);
	} else {
		console.log("Title ya está en uso");
	}
} else if (command === 'list') {
	var allnotes = notes.getAll();
	console.log(`Regresando ${allnotes.length} nota(s)`);
	allnotes.forEach((note) => notes.logNote(note));
} else if (command === 'read'){
	var notaleida = notes.getNote(argv.title);
	if (notaleida.length > 0){
		console.log("Se encontro el titulo");
		notes.logNote(notaleida[0]);
	} else {
		console.log("No se encontro el titulo");
	}
} else if (command === 'remove'){
	var noteremoved = notes.removeNote(argv.title);
	var message = noteremoved ? "Se elimino la nota" : "No se encontro la nota";
	console.log(message);
} else {
	console.log('Command not recognized');
}
