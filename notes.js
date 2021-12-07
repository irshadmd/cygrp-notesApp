const fs=require('fs');
const getNotes=function(){
    console.log('Getting Notes...')
    let notes=loadNotes();
    console.table(notes);
}
const addNotes=function(title,body){
    let notes=loadNotes();
    let duplicateNotes=notes.filter(function(note){
        return note.title===title
    })
    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
    }else{
        console.log("Title alredy taken")
    }
    
}
const saveNotes=function(notes){
    fs.writeFileSync('./notes.json',JSON.stringify(notes));
}
const loadNotes=function(){
    try {     
        let data=fs.readFileSync('./notes.json')
        data=data.toString();
        return JSON.parse(data);
    } catch (error) {
        console.log('file not found')
        return [];
    }
}
const removeNote=function(title){
    let notes=loadNotes();
    let filteredNotes=notes.filter((note)=>{
        return note.title!==title
    })
    saveNotes(filteredNotes)
}
const readNote=function(title){
    let notes=loadNotes();
    let filteredNotes=notes.filter((note)=>{
        return note.title===title
    })
    console.table(filteredNotes)
}

module.exports={
    getNotes,addNotes,removeNote,getNotes,readNote
}