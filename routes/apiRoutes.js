let notes = require("../db/db.json");
const fs = require("fs");
const { uid } = require("uid");



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
    fs.writeFile("./db/db.json", JSON.stringify(notes) , err => {
      if(err) throw err
      res.json(notes)
    })
    
  })

  
  app.delete('/api/notes/:id', (req, res) => {
    notes = notes.filter(note => note.id !== req.params.id)
    fs.writeFile("./db/db.json", JSON.stringify(notes), err => {
      if (err) throw err
      res.json(notes)
    })
    
  });
};


module.exports = apiRoutes