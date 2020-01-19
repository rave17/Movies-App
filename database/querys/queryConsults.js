const queryConsults = {}

    queryConsults.list = 'SELECT * FROM data_movies'
    
    queryConsults.insert = 'INSERT INTO data_movies set ?'

    queryConsults.edit = "SELECT * FROM data_movies WHERE iddata_movies = ?"

    queryConsults.update = "UPDATE data_movies set ? WHERE iddata_movies = ?" 

    queryConsults.delete = 'DELETE FROM data_movies WHERE iddata_movies = ?'


    
module.exports = queryConsults