const db = require('../../database/models');
const sequelize = db.sequelize;

const moviesController = {
    'create': (req, res) => {
        db.Movie.create(req.body)
             .then(movie => {
               return res.status(200).json(
                     {
                        status: 200,
                        data: movie

                     })
                 })
                 .catch(err => {res.status(400).json({error: "Cannot create"})})
    },
    'delete': (req, res) => {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(movie => {
            return res.status(200).json({
                status: 200,
                data: movie
            })
        })
    }
}

module.exports = moviesController;