# Gestion des votes et du bouton

### Objectifs

* Styliser le bouton
* Ajouter un vote lors du click
* Autoriser un vote toutes les 2 minutes

Pour styliser le bouton, rendez-vous dans `components/button.js` et suivre les commentaires comme dans la première partie.

### Gestion du click

Le composant Button possède une propriété onClick qui accepte une fonction.

Cette fonction sera appellée lors du click sur le bouton. Elle doit donc ajouter un vote à la bonne personne en fonction du bouton sur le quel l'utilisateur a cliqué.

Dans le fichier `pages/index.js` le composant Home possède 2 fonctions, `voteAFR()` et `voteJDO()`.

Elles sont vides pour l'instant, ta mission si tu l'acceptes sera de les écrire pour enregistrer le vote dans une base de données afin de mettre à jour l'application. Pour cela, je vais te guider pour réaliser la fonction voteAFR\(\) et te laisserai faire l'autre qui est très similaire.

###### voteAFR\(\)

Le score des 2 concurrents est stocké dans la variable `this.state` . Le score de AFR dans `this.state.afr`.

Il est possible de stocker une valeur dans une variable afin de l'utiliser plus tard dans la fonction. Nous allons donc sauvegarder le nouveau score de AFR dans une variable afin de l'enregistrer dans une base de données.

```javascript
const points = this.state.afr + 1;
```

Pour sauvegarder dans la base de données une fonction est à ta disposition pour chaque concurrent.

Pour AFR, elle s'utilise comme ceci : `afrRef.set(points);`

On obtient donc à la fin pour la fonction voteAFR ceci :

```javascript
voteAFR() {
   const points = this.state.afr + 1;
   afrRef.set(points);
}
```

###### voteJDO\(\)

Le score de JDO est stocké dans `this.state.jdo` et la fonction pour sauvegarder dans la base de données est la suivante: `jdoRef.set(points);`

A toi de jouer !

## Eviter les tricheurs

Voilà ton application fonctionne, cependant un utilisateur peut voter à l'infini et donc fausser les scores.

On va donc le limiter à 1 vote toutes les 2 minutes.

Pour cela, tu vas pouvoir utiliser deux fonctions situées dans le fichier d'utils. Pour utiliser ces fonctions il faut d'abord les importer tout comme le composant Score plutôt dans l'exercice.

Pour rappel voici comment importer les deux fonctions que l'on va utiliser :

```javascript
import { hasVoted, setVote } from '../utils';
```

Tu pourras trouver leur description et ce qu'elles font et comment les utiliser dans la page [API](/api.md).

Il faut donc vérifier que l'utilisateur n'a pas déjà voté. Si il n'a pas voté ou si il a voté il y a plus de 2 minutes alors on on comptabilise son vote sinon rien ne se passe.

Pour cela, nous allons utiliser l'exemple donnée du If/Else pour la fonction `hasVoted()` et l'ajouter dans la fonction `voteAFR()` et `voteJDO()`.

Voici la fonction `voteAFR()` finale :

```javascript
voteAFR(){
    const points = this.state.afr + 1;
    if(hasVoted()){
        setVote();
        afrRef.set(points);
    }
}
```

Comme précédemment à toi de faire la fonction `voteJDO()`.



# BIEN JOUE !!

Tu as terminé l'exercice. Si il reste du temps, on pourra toujours améliorer l'application avec des animations ou encore afficher un message lorsqu'une personne vote, etc, etc

Un peu avant 12H, l'équipe vamos va faire sa stand-up quotidienne. Tu pourras y prendre part afin de découvrir cette activité et comment elle est utilisée chez Kilix pour gérer la communication dans un projet.

En espérant que tu as apprécié cette petite introduction dans le monde du dévelopement, que tu n'as pas trop peur de nous et reviendras nous voir quand tu passeras sur Paris :\)

### &lt;3&lt;3 de Kiloux



