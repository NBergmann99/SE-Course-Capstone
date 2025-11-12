const Drawing = require("./models/drawing");

const firstNewDrawing = Drawing ({
    title: '7.073.118',
    rpm: '6000',
    body: 'Drilling and milling head, straight collet chuck, ER25A, PRECI-FLEX®, CC external coolant supply',
    ratio: '1:1',
    torque: '40 Nm',
    axis: 'X-axis',
    imageUrl: '/7073118.jpg'
});

const secondNewDrawing = Drawing ({
    title: '7.073.240',
    rpm: '5000',
    body: 'Drilling and milling head, straight collet chuck, ER32A, PRECI-FLEX®, CC external coolant supply',
    ratio: '1:1',
    torque: '70 Nm',
    axis: 'X-axis',
    imageUrl: '/7073240.jpg'
});

const thirdNewDrawing = Drawing ({
    title: '7.073.282',
    rpm: '5000',
    body: 'Drilling and milling head, angular, left hand - right hand collet chuck, ER32A, PRECI-FLEX®, CC external coolant supply',
    ratio: '1:1',
    torque: '70 Nm',
    axis: 'Z-axis',
    imageUrl: '/7073282.jpg'
});

const fourthNewDrawing = Drawing ({
    title: '7.075.264',
    rpm: '4000',
    body: 'Drilling and milling head, angular, right hand adjustable alignment pin quick change, CAT40, external and central coolant supply',
    ratio: '1:1',
    torque: '150 Nm',
    axis: 'Z-axis',
    imageUrl: '/7075264.jpg'
});

const fifthNewDrawing = Drawing ({
    title: '7.075.555',
    rpm: '6000',
    body: 'Drilling and milling head, angular, left hand - right hand collet chuck, ER20A, PRECI-FLEX®, CC external coolant supply',
    ratio: '1:1',
    torque: '25 Nm',
    axis: 'Z-axis',
    imageUrl: '/7075555.jpg'
})