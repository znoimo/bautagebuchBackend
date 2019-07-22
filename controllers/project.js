const Project = require('../models').Project;
module.exports = {
    create(req,res) {
        return Project.create({
            name: req.body.name,
            corporation: req.body.corporation
        })
        .then(project => res.status(201).send(project))
        .catch(error => res.status(400).send(error));
    },
    findAll(req,res) {
        return Project.findAll().then( (projects) => res.json(projects)).catch(error => res.status(400).send(error));
    },
    update(req,res) {
        return Project.update({
            name: req.body.name,
            corporation: req.body.corporation
        },
        {   where: {
            id: req.params.id
        }
        })
        .then(project => res.status(201).send(project))
        .catch(error => res.status(400).send(error));
    },
    deleteById(req,res) {
        return Project.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((project) => res.json(project))
        .catch(error => {
            console.log(req);
            res.status(400).send(error);
        });
    }
};