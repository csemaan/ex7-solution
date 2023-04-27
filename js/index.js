/*******************************************************************************
    Contrôler la création et la destruction des éléments 'disque' et 'etoile'
*******************************************************************************/

// Saisir les boutons de contrôle un à la fois
let btnLancerDisque = document.querySelector('.btn-lancer-disque');
let btnLancerEtoile = document.querySelector('.btn-lancer-etoile');

// Leur associer les gestionnaires d'événements
btnLancerDisque.addEventListener('click', creerDisque);
btnLancerEtoile.addEventListener('click', creerEtoile);

// Initialiser des variables pour numréroter les formes créées
let numeroDisque = 0;
let numeroEtoile = 0;

/**
 * Créer un élément HTML ayant la classe 'disque', le configurer, et l'insérer 
 * dans le document à l'emplacement approprié
 */
function creerDisque() {
    // Élément
    let eltDisque = document.createElement('div');
    // Contenu texte
    eltDisque.innerText = ++numeroDisque;
    // Classe
    eltDisque.classList.add('disque');
    // Gestionnaire d'événement 'clic' pour supprimer l'élément
    eltDisque.addEventListener('click', detruireForme);
    // Insertion dans le DOM
    document.querySelector('#conteneur-disques').append(eltDisque);
}

/**
 * Créer un élément HTML ayant la classe 'etoile', le configurer, et l'insérer 
 * dans le document à l'emplacement approprié
 */
function creerEtoile() {
    let eltEtoile = document.createElement('div');
    eltEtoile.innerText = ++numeroEtoile;
    eltEtoile.classList.add('etoile');
    eltEtoile.addEventListener('click', detruireForme);
    document.querySelector('#conteneur-etoiles').append(eltEtoile);
}

/**
 * Détruire l'élément HTML cliqué
 * @param {Event} event : objet Event passé au gestionnaire d'événement 
 */
function detruireForme(event) {
    // L'élément correspondant à la forme cliquée
    let disqueOuEtoile = event.target;
    // Retirer le gestionnaire d'événement associé avec l'élément cliqué
    disqueOuEtoile.removeEventListener('click', detruireForme);
    // Retirer l'élément du DOM
    disqueOuEtoile.remove();
}