// packages
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// get route for JSON notes
router.get('/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(dbJson);
});

// post route for new notes
router.post('/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json', 'utf8'));

    // new note var
    const newNote = {
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text
    };
    
    dbJson.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
    res.json(dbJson);
});

module.exports = router;