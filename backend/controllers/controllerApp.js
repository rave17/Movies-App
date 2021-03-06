const controllerApp = {}

//list movies
controllerApp.list = (req, res) => {
  req.getConnection((err, conn) => {
    let queryConsult = 'SELECT * FROM data_movies'
    conn.query(queryConsult, function (err, data_movies) {
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
    conn.query('INSERT INTO data_movies set ?', [data], (err, data_movies) => {
      console.lo  
      console.log('texto ejemplo ')
      res.redirect('/')
    })
  })
}

//edit movies
controllerApp.edit = (req, res) => {
  const { id } = req.params
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM data_movies WHERE iddata_movies = ?", [id], (err, rows) => {
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
    conn.query("UPDATE data_movies set ? WHERE iddata_movies = ?", [newMovie, id], (err, rows) => {
      console.log(newMovie)
      res.redirect('/')
    })
  })
}
//remove movies
controllerApp.remove = (req, res) => {
  const { id } = req.params
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM data_movies WHERE iddata_movies = ?', [id], (err, rows) => {
      if (err) throw err
      res.redirect('/')
    })
  })
}


controllerApp.findGet = (req, res) => {
  const { searchBar } = req.query.searching
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM data_movies WHERE `Title`  = ?", [searchBar], function (err, rows) {
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
    conn.query("SELECT * FROM data_movies WHERE `Title` LIKE = ?", [searchBar], (err, rows) => {
      if (err) throw err

      console.log(movieSearch)
      res.redirect('find')

    })
  })
}

module.exports = controllerApp