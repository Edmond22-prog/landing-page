/**
 * backgrounds.js
 *
 * Liste des images de fond du slideshow.
 * ➜ Pour ajouter/remplacer une image :
 *    1. Place ton fichier dans /public/backgrounds/
 *    2. Ajoute son chemin ici (ex: "/backgrounds/ma-photo.jpg")
 *
 * Formats supportés : .jpg, .jpeg, .png, .webp, .svg
 */

export const BACKGROUND_IMAGES = [
    "/backgrounds/bg-01.svg",
    "/backgrounds/bg-02.svg",
    "/backgrounds/bg-03.svg",
    "/backgrounds/bg-04.svg",
    "/backgrounds/bg-05.svg",
];

/**
 * Durée d'affichage de chaque image en secondes.
 * Augmente cette valeur pour ralentir le slideshow.
 * @type {number}
 */
export const SLIDE_DURATION = 6;
