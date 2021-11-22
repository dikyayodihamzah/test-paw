require('../models/mahasiswa.model')

const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Mahasiswa = mongoose.model('Mahasiswa');

router.get('/', (req, res) => {
    Mahasiswa.find()
        .then(mahasiswas => res.json(mahasiswas))
        .catch(err => res.status(400).json('Error: '+err));
});

router.post('/add', (req, res) => {
    var mahasiswa = new Mahasiswa();

    mahasiswa.name = req.body.name;
    mahasiswa.nim = req.body.nim;
    mahasiswa.jurusan = req.body.jurusan;
    mahasiswa.email = req.body.email;
    mahasiswa.nohp = req.body.nohp;

    mahasiswa.save()
        .then(() => res.json('Data mahasiswa ditambahkan!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res) =>{
    Mahasiswa.findById(req.params.id)
        .then(mahasiswa =>{
            mahasiswa.name = req.body.name;
            mahasiswa.nim = req.body.nim;
            mahasiswa.jurusan = req.body.jurusan;
            mahasiswa.email = req.body.email;
            mahasiswa.nohp = req.body.nohp;

            mahasiswa.save()
                .then(() => res.json('Data mahasiswa berhasil diperbarui!'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err))
});

router.get('/:id', (req, res) => {
    Mahasiswa.findById(req.params.id)
        .then(mahasiswa => res.json(mahasiswa))
        .catch(err => res.status(400).json('Error: '+err));
});

router.delete('/delete/:id', (req, res) => {
    Mahasiswa.findByIdAndDelete(req.params.id)
        .then(mahasiswa => res.json('Data mahasiswa berhasil dihapus!'))
        .catch(err => res.status(400).json('Error: '+err));
});

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'name':
                body['nameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

module.exports = router;