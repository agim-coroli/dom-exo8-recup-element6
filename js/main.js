// 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text
let a = document.querySelector("h2")
console.log(a.innerText);


// 2. Trouve le moyen de modifier sa valeur par "Exercice 1"
a.textContent = "exercice 1";


// 3. Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.
b = a.nextElementSibling;
b.textContent = "exercice 1";
console.log(b);


// 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console
let c = document.querySelector("#users").id
console.log(c);



// 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)
let h1 = document.querySelector("h1").className
console.log(h1);
let h11 = document.querySelector("h1").classList
console.log(h11);



// 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1
let boucle1 = document.querySelectorAll("h1")
boucle1.forEach(element => {
    console.log(element.className);
});



// 7. Trouve une propriété pour afficher tous les attributs du premier input
// 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"
// 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"
let truc = document.querySelector("input");
truc.setAttribute("type","password");
truc.setAttribute("type","color");
console.log(truc);


// 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input
let trucc = document.querySelector("input").type
console.log(trucc);


// correction 

// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*
// > Fais des console.log pour chaque exercice afin de montrer le résultat!
// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text
let h2 = document.querySelector('h2');
console.log(h2.innerText);

// ### 2. Trouve le moyen de modifier sa valeur par "Exercice 1"
h2 = document.querySelector('h2');
h2.innerText = 'Exercice 1';
console.log(h2);

// ### 3. Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'.

h2 = document.querySelector('h2');
console.log(h2.nextElementSibling);

let p = h2.nextElementSibling;
p.innerText = "exercice 2"
console.log(p);



// ### 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console
let premierSec = document.querySelector('#contact')
console.log( premierSec.id);


// ### 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)
let premiereH1 = document.querySelector(".text-warning");
console.log(premiereH1.className);


// console.log(premiereH1.classList);



// ### 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1
let allH1 = Array.from(document.querySelectorAll("h1"));
allH1.forEach(element => {
    console.log(element.className);
});
// ### 7. Trouve une propriété pour afficher tous les attributs du premier input
let myInput = document.querySelector("input");

console.log(myInput.attributes);

// ### 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input
console.log(myInput.getAttribute('type'));

// ### 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"

let myInputEx9 = document.querySelector("#inputPassword3");
myInputEx9.setAttribute('type','password');

// ### 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"


myInputEx9.setAttribute("type", "color");
console.log(myInputEx9);



// TODO exo 2 
// ! 
// * zarearazzqer
// ? sqdfqsfsqd




