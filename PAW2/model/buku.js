const mongoose = require("mongoose");
const router = require("../routes");


const bukuSchema = new mongoose.Schema({
    judul : {type : String, required : true},
    penulis : {type : String, required : true},
    genre : [{type : String, required : true}]
});

router.post('/', (req, res) => {

    console.log(buku);
    buku.save().then((createdBuku)=>{
        res.res.status(201).json({
            message : "Data Berhasil disimpan",
            bookId : createdBuku._id

        });

    });
});

module.exports = mongoose.model("Buku", bukuSchema);