# Guide des propriétés CSS à utiliser

## Couleur

##### backgroundColor

Définir la couleur du fond d'un élément.

##### color

Changer la couleur du texte

```javascript
{
    backgroundColor: '#CAF200',
    backgroundColor: 'yellow',

    color: '#caf200',
    color: 'red',
}
```

---

## Police

##### fontFamily

Changer la police utilisée.

##### fontSize

Changer la taille de la police.

```javascript
{
    fontFamily: 'Arial',
    fontFamily: 'Arial, sans-serif',

    fontSize: '24px',
    fontSize: '2rem',
}
```

---

## Bordure

##### border

Permet d'ajouter une bordure a un élément.

##### borderRadius

Déterminer l'arrondi des bords d'un élément.

```javascript
{
    border: '2px solid #000000',
    border: '4px dashed #CAF200',

    borderRadius:'50%',
    borderRadius: '50px',
    border: '4px dashed #CAF200',
}
```

---

## Marge

##### margin

Ajouter une marge externe.

##### padding

Ajouter une marge interne.

```javascript
{
    margin: '3px',
    margin: '3px 5px', // Applique a marginTop et marginBottom puis marginLeft et marginRight
    margin: '0px auto', // La même chose mais laisse le navigateur déterminer la taille pour marginLeft et Right
    margin: '3px 4px 4px 6px',

    marginBottom: '3px',
    marginTop: '3px',
    marginRight: '3px',
    marginLeft: '3px',
}
```

---

## Transform

Appliquer des transformations à l'élement.

1. rotate: Appliquer une rotation \(exemple: 'rotate\(90deg\)'\)
2. scale: Changer l'echelle \(exemple: 'scale\(1.3\)'\)
3. skew: Changer l'inclinaison \(exemple: 'skew\(5deg, 20deg\)'\)

Exemples :

```js
{
    transform: 'rotate(20deg)',
    transform: 'scale(2)',
    transform: 'skew(5deg, -10deg)',
    transform: 'rotate(20deg) scale(2)',
}
```



