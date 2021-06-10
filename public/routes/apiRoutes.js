const notes = require("../db/db.json");
const fs = require("fs");
const { uid } = require("uid");
const db = require('db/db')


const apiRoutes = (app) => {
  
  app.get('/api/notes', (req, res) => {
    res.json(notes)
  })

  
  app.post('/api/notes', (req, res) => {
    const note = {
      id: uid(),
      ...req.body
    }
    notes.push(note)
    res.json(notes)
  })

  
  app.delete('/api/notes/:id', (req, res) => {
    notes = notes.filter(note => note.id !== req.params.id)
    res.json(notes)
  });
};


module.exports = apiRoutes