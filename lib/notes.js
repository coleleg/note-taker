const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
  };

  function getNotes(query, notes) {
    let results = notes;
    return results;
  };

  function deleteNote(id, notesArray) {
    const note = id;

    notesArray.splice(note , 1);

    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );

  }

module.exports = {
  createNewNote,
  getNotes,
  deleteNote 
};
  