const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                console.log(genres)
                res.status(200).json({
                    meta: {
                        status: 200, 
                        total: genres.length,
                        url: 'api/genres'
                },
                data: genres
            })
            })
            .catch(err => {res.status(400).json({error: 'no permission'})})
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        url: 'api/genres/detail'
                    },
                    data: genre
                })
            });
    }

}

module.exports = genresController;