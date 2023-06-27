const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route from DB
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "galleryItems"';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making query ${queryText}`, error);
            res.sendStatus(500);
        });
});

// POST route to DB
router.post('/', (req, res) => {
    let newImage = req.body;
    console.log(newImage);
    let sqlText = `
    INSERT INTO "galleryItems" ("path", "description")
    VALUES ($1, $2);
    `;    
    console.log('POST was sent', sqlText);
    pool.query(sqlText, [newImage.path, newImage.description])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.error(error);
            res.sendStatus(500);
        })
});
module.exports = router;