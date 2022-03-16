const router = require('express').Router();
const fs = require('fs');
// const { notes } = require('../../db/db.json');
const { getNotes, createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');



router.get('/notes', (req, res) => {
    let results = notes;
    getNotes(notes);
    res.json(notes);
    return results;
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const note = deleteNote(req.body.id, notes);
    res.json(note);
});

module.exports = router;