// packages
const router = require.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// get route for JSON notes
router.get('/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(dbJson);
})