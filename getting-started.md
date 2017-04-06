# How to start



Pour commencer, on va commencer par ouvrir un terminal, LE saint graal du développeur.

Pour cela, rien de plus simple, il suffit de taper sur \`CMD + Espace\`, rechercher 'Hyper' puis appuyer sur Entrée.

Une fois le terminal ouvert, écrire les commandes suivantes pour etre dans le bon dossier :

```
cd ~/Documents/JDO
```

Maintenant que nous sommes dans le bon dossier, nous allons récupérer les bases du projet :

```
git clone https://github.com/Kilix/jdo-intro
cd jdo-intro
```

Pour que le projet fonctionne et que l'on puisse développer, il nous reste quelques commandes a lancer, elles permettent de récupérer les dépendances du projet que la communauté de développeur a gentillement mis à disposition. Ces ressources sont développés par énormément de développeurs et entreprises tels que Facebook, Google, etc.

Voici comment installer ces dépendances :

```
yarn install
```

Aller bientôt la fin on va bientôt pouvoir coder, commençons par lancer l'éditeur de code :

```
code .
```

Puis revenons sur le terminal et lançons le projet :

```
yarn run dev
```

Et pour finir ouvrons le navigateur chrome à l'adresse [http://localhost:3000/](http://localhost:3000/ "http://localhost:3000/")

