# API

Les fonctions qui seront utiles sont:

## voteAFR\(\)

Ajoute un vote a AFR et enregistre que la personne a voté

---

## voteJDO\(\)

Ajoute un vote a JDO et enregistre que la personne a voté

---

## hasVoted\(\)

Permet de savoir si la personne a voté dans les 2 dernières minutes.

Elle s'utilise dans une condition If/Else :

```javascript
if(hasVoted()) {
    // renvoie true
    // execute ce code si il a deja voté ou si il voté depuis moins de 2 minutes.
    
} else {
    // renvoie false
    // éxécute ce code si il n'a pas encore voté ou si il a voté depuis plus de 2 minutes.
    
}
```

---

## setVote\(\)

Permet d'enregistrer la fait que la personne a voté pour éviter qu'elle puisse revoter avant 2 min.

Elle ne doit etre appellée que si hasVoted\(\) renvoie false.

```
setVoted();
```



