/*
Configurer la collection de données
*/
  // Importer le constucteur NewsModel
  let NewsModel = require('../constructors/news-model');

  // Créer trois publications
  let myImage = new NewsModel(0, 'IMG', 'One Love', 'http://www.jdubuzz.com/files/2015/12/Bob-Marley-in-1979-before-009.jpg');
  let myQuote = new NewsModel(1, 'QUOTE', 'Nulle pierre ne peut être polie sans friction, nul homme ne peut parfaire son expérience sans épreuve.','')
  let myVideo = new NewsModel(2, 'VID', 'The Gladiators', 'P8BKRCpVoug')

  // Créer une collection de données
  let newsFeedCollection = [myImage, myQuote, myVideo]

  
/*
Définir le service
*/
  class NewsFeed {

  /*
  Méthode pour afficher la collection
  */
    static getAll(callBack){
      // Envoyer le collection dans la vue
      callBack(newsFeedCollection)
    }
  }

/*
Exporter le service
*/
  module.exports = NewsFeed;