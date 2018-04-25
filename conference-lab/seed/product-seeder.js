var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cewit_conference');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        title: 'React',
        description: 'Science and Technology',
        price: 12
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Camera_phone_sharing.JPG',
        title: 'React-Native',
        description: 'Science and Technology',
        price: 12
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        title: 'Node JS',
        description: 'Science and Technology',
        price: 12
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg',
        title: 'MongoDb',
        description: 'Science and Technology',
        price: 15
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Philippine-stock-market-board.jpg',
        title: 'Finance',
        description: 'Business and Finance',
        price: 0
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/USCG_Org_Chart.jpg',
        title: 'Business',
        description: 'Business and Finance',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Blockchain.svg',
        title: 'Blockchain',
        description: 'Business and Finance',
        price: 15
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Bitcoin_logo.svg',
        title: 'Bitcoin',
        description: 'Business and Finance',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Albert_Edelfelt_-_Louis_Pasteur_-_1885.jpg',
        title: 'Chemical Labs',
        description: 'Medical Science',
        price: 20
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/US_Navy_100506-N-7498L-189_Lt._Brian_Heintschel_studies_a_sample_of_insects_collected_from_ships_and_shore_facilities.jpg',
        title: 'Insects',
        description: 'Medical Science',
        price: 15
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Bourgelat.png',
        title: 'Animals',
        description: 'Medical Science',
        price: 20
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/HouseSparrow23.jpg',
        title: 'Birds',
        description: 'Medical Science',
        price: 15
    })
];

var done = 0;
for( var i=0; i<products.length; i++){
    products[i].save(function(err, result){
        done++;
        console.log("2");
        if(done === products.length){
            exit();
        }
    });
    console.log("4");
}

function exit(){
    mongoose.disconnect();
}
