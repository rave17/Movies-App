const queryConsults = require('../../database/querys/queryConsults')
const controllerApp = {}

//list movies
controllerApp.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query(queryConsults.list, function (err, data_movies) {
      if (err) throw err
      console.log(data_movies)
      res.render('list', {
        title: 'Movies',
        data: data_movies
      })
    })
  })
}

//Add movies
controllerApp.add = (req, res) => {
  console.log('se hizo el pedido')
  res.render('add')
}

controllerApp.save = (req, res) => {
  const data = req.body
  req.getConnection((err, conn) => {
    conn.query(queryConsults.insert, [data], (err, data_movies) => {
      console.log('texto ejemplo ')
      res.redirect('/')
    })
  })
}

//edit movies
controllerApp.edit = (req, res) => {
  const { id } = req.params
  req.getConnection((err, conn) => {
    conn.query(queryConsults.edit, [id], (err, rows) => {
      res.render('update', {
        title: 'Edit movie',
        data: rows[0]
      })
    })
  })
}
//update movies
controllerApp.update = (req, res) => {
  const { id } = req.params
  const newMovie = req.body
  req.getConnection((err, conn) => {
    conn.query(queryConsults.update, [newMovie, id], (err, rows) => {
      console.log(newMovie)
      res.redirect('/')
    })
  })
}
//remove movies
controllerApp.remove = (req, res) => {
  const { id } = req.params
  req.getConnection((err, conn) => {
    conn.query(queryConsults.delete, [id], (err, rows) => {
      if (err) throw err
      res.redirect('/')
    })
  })
}


controllerApp.findGet = (req, res) => {
  const { searchBar } = req.query.searching
  req.getConnection((err, conn) => {
    conn.query(queryConsults.findGet, [searchBar], function (err, rows) {
      res.render('find', {
        title: 'Find movie',
        result: 'una pelicula',
        dataFind: rows[0]
      })
    })
  })
}

controllerApp.findPost = (req, res) => {
  const searchBar = req.query.searching
  const movieSearch = req.body
  req.getConnection((err, conn) => {
    conn.query(queryConsults.findPost, [searchBar], (err, rows) => {
      if (err) throw err
      console.log(movieSearch)
      res.redirect('find')
    })
  })
}

module.exports = controllerApp