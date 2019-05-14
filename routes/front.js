// Configuration du module
let express = require('express');
let router = express.Router();

// Configuration de la route => http://localhost:8080/
router.get('/', (req, res, next) => {

    // Renvoyer la réponse la vue html
    res.render('index', {title: "Hi there!", subTitle: "Bienvenue sur mon blog"});

});

// Export du module
module.exports = router; 