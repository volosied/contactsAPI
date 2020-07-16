const express = require('express');
const knex = require('../data/db-config.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const contacts = await knex('contacts')
        res.json(contacts)
    } catch(err) {
        res.status(500).json({message: 'contacts not found'})
    }
});


module.exports = router;