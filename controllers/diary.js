const Diary = require('../models').Diary;
module.exports = {
    create(req,res) {
        return Diary.create({
            date: req.body.date,
            projectId: req.body.projectId
        })
        .then(diary => {
            res.status(201).send(diary);
        })
        .catch(error => res.status(400).send(error));
    },
    findAllByProjectId(req,res) {
        return Diary.findAll({
            where: {
                projectId: req.params.projectId
            }
        })
        .then( (diaries) => res.json(diaries))
        .catch(error => {
            console.log(req);
            res.status(400).send(error);
        });
    },
    deleteById(req,res) {
        return Diary.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((diary) => res.json(diary))
        .catch(error => {
            console.log(req);
            res.status(400).send(error);
        });
    }
};