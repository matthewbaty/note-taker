const router = require('express').Router();
const path = require('path');

// get route homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// get route notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// get * route homepage
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// export the router 
module.exports = router;