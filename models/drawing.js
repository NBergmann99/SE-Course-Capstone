const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drawingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    rpm: {
        type: String,
        required: true 
    },
    body: {
        type: String,
        required: true
    },
    ratio: {
        type: String,
        required: true
    },
    torque: {
        type: String,
        required: true
    },
    axis: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
}, { timestamps: true });

const Drawing = mongoose.model('Drawing', drawingSchema);

module.exports = Drawing;