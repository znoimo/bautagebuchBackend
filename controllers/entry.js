const Entry = require('../models').Entry;
module.exports = {
    create(req,res) {
        return Entry.create({
            text: req.body.text,
            weather: req.body.weather,
            memoPath: req.body.memoPath,
            fotoPath: req.body.fotoPath,
            diaryId: req.body.diaryId
        })
        .then(diary => {
            res.status(201).send(diary);
        })
        .catch(error => res.status(400).send(error));
    },
    findAll(req,res) {
        return Entry.findAll().then( (entries) => res.json(entries)).catch(error => res.status(400).send(error));
    },
    findAllByDiaryId(req,res) {
        return Entry.findAll({
            where: {
                diaryId: req.body.diaryId
            }
        })
        .then((entries) => {
            res.json(entries);
        })
        .catch((error)=> res.status(400).send(error));
    },
    update(req,res) {
        return Entry.update({
            text: req.body.text,
            weather: req.body.weather,
            memoPath: req.body.memoPath,
            fotoPath: req.body.fotoPath
        },
        {   where: {
            id: req.params.id
        }
        })
        .then(entry => res.status(201).send(entry))
        .catch(error => res.status(400).send(error));
    },
    deleteById(req,res) {
        return Entry.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((entry) => res.json(entry))
        .catch(error => {
            console.log(req);
            res.status(400).send(error);
        });
    }
};