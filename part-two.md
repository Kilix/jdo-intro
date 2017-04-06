# Gestion des votes et du bouton

### Objectifs

* Styliser le bouton
* Ajouter un vote lors du click
* Autoriser un vote toutes les 2 minutes

Pour styiliser le bouton rendez-vous dans `components/button.js` et suivre les commentaires comme dans la première partie.



### Gestion du click

Le composant Button posède une propriété onClick qui accepte une fonction.

Cette fonction sera appellée lors du click sur le bouton. Elle doit donc ajouter un vote à la bonne personne en fonction du bouton sur le quel l'utilisateur a cliqué.

Dans le fichier `pages/index.js` le composant Home possède 2 fonctions, `voteAFR()` et `voteJDO()`.

Elles sont vides pour l'instant, ta mission si tu l'acceptes seras de les écrires pour enregistrer le vote sur une base de données pour mettre à jour l'application. Pour cela, je vais te guider pour réaliser la fonction voteAFR\(\) et te laisserai faire l'autre qui est très similaire.

###### voteAFR\(\)

le score des 2 concurents est stocké dans la variable `this.state` . Le score de AFR dans `this.state.afr`

Il est possible de stocker une valeur dans une variable afin de l'utiliser plustard dans la fonction. Nous allons donc sauvegarder le nouveau score de AFR dans une variable afin de l'enregistrer dans une base de donnée.

```javascript
const points = this.state.afr + 1;
```





