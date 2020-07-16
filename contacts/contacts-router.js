const express = require('express');
const knex = require('../data/db-config.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const contacts = await knex('contacts')
        res.json(contacts)
    } catch(err) {
        res.status(500).json({message: 'contacts not found', error: err})
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params

    try {
        const contact = await knex('contacts').where('id', id)
        res.json(contact)
    } catch(err) {
        res.status(500).json({message:'there was a problem retrieving this contact', error:err})
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const newInfo = req.body

    try {
        const change = await knex('contacts').update(newInfo).where({id})

        if(change) {
            res.json({updated: change})
        } else {
            res.status(404).json({message: 'there was a problem updating this contact'})
        }
    } catch(err) {
        res.status(500).json({message:'there was a problem updating this contact', error:err})
    }
})

router.post('/', async (req, res) => {
    const newContact = req.body

    try {
        const contact = await knex('contacts').insert(newContact)
        res.status(201).json(contact)
    } catch(err) {
        res.status(500).json({message: 'there was a problem adding a new contact', error:err})
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params

    try {
        const deletedContact = await knex('contacts').delete().where({id})

        if(deletedContact) {
            res.json({deleted: deletedContact})
        } else {
            res.status(404).json({message: 'id may be invalid, please check id'})
        }
    } catch(err) {
        res.status(500).json({message: 'there was a problem deleting this contact', error:err})
    }
})

module.exports = router;