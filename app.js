const yargs = require('yargs');
const notes=require('./notes');

//create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:"Enter notes content",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log('Adding note...');
        console.log('Title: '+argv.title);
        console.log('Body: '+argv.body);
        notes.addNotes(argv.title,argv.body);
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log('Removing the note');
        notes.removeNote(argv.title)
    }
})
//create list command
yargs.command({
    command:'list',
    describe:'List all note',
    handler:function(){
        console.log('Listing all note');
        notes.getNotes();
    }
})
//create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:"Note Title",
            type:'string',
            demandOption:true
        }
    },
    handler:function(argv){
        console.log('Reading the note');
        notes.readNote(argv.title)
    }
})

yargs.parse();