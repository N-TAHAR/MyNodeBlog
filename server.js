// Importer les composants
let express = require('express');
let bodyParser = require('body-parser');

// Importer les modules de gestion des routes
let front = require('./routes/front');

// Définir le port
let port = 8080;
 
// Initier le serveur
let app = express();

// Configuration du moteur de template EJS
app.set('view engine', 'ejs')

// Définir le dossier static de la partie front
app.use(express.static('public'));

// Définir les routes
app.use('/', front);

// Lancer le server
app.listen( port, () => console.log('Le serveur est lancé sur le port ' + port) );