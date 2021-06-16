const { join } = require("path");


const htmlRoutes = (app) => {
  

  app.get('/notes', (req, res) => {
    res.sendFile(join(__dirname, '../public/notes.html'))
  });

  
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../public/index.html'))
  });

};

module.exports = htmlRoutes