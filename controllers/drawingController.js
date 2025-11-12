const Drawing = require('../models/drawing');

// drawing_index, drawing_details, drawing_create_get, drawing_create_post, drawing_delete

const drawing_index = (req, res) => {
    Drawing.find().sort({ title: 1 })
        .then((result) => {
            res.render('drawings/index', { title: 'All drawings', drawings: result })
        })
        .catch((err) => {
            console.log(err)
        })
}

const drawing_details = (req, res) => {
    const id = req.params.id;
    Drawing.findById(id)
        .then(result => {
            res.render('drawings/details', { drawing: result, title: 'drawing Details' })
        })
        .catch((err) => {
            res.status(404).render('404', { title : 'drawing not found' })
        })
} 

const drawing_create_get = (req, res) => {
    res.render('drawings/create', { title : 'Create' });
}

const drawing_create_post = (req, res) => {
    const drawing = new Drawing(req.body);
    
        drawing.save()
            .then((result) => {
                res.redirect('/drawings')
            })
            .catch((err) => {
                console.log(err)
            })
}

const drawing_delete = (req, res) => {
    const id = req.params.id;
    Drawing.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/drawings' })
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = {
    drawing_index: drawing_index,
    drawing_details,
    drawing_create_get,
    drawing_create_post,
    drawing_delete
}