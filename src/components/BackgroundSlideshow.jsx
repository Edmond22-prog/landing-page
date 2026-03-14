/**
 * BackgroundSlideshow.jsx
 *
 * Slideshow CSS-only (crossfade doux) en arrière-plan.
 *
 * Technique :
 *  - Toutes les images sont empilées en position absolute (z-index 0)
 *  - Chaque image a une animation `crossfade` avec un délai décalé
 *    proportionnel à son index (stagger effect)
 *  - La durée totale du cycle = SLIDE_DURATION * nombre d'images
 *  - Un overlay sombre est appliqué par-dessus pour garder le texte lisible
 *
 * Pour remplacer les images : voir src/constants/backgrounds.js
 *
 * @param {Object}   props
 * @param {string[]} props.images        - Tableau des chemins d'images
 * @param {number}   props.slideDuration - Durée par slide en secondes
 */
function BackgroundSlideshow({ images, slideDuration }) {
    // Durée totale d'un cycle complet = durée par slide × nombre d'images
    const cycleDuration = slideDuration * images.length;

    return (
        // Le wrapper agit comme le "cadre" : remplit tout l'espace du parent
        <div className="slideshow" aria-hidden="true">

            {images.map((src, index) => (
                <div
                    key={src}
                    className="slideshow__slide"
                    style={{
                        backgroundImage: `url(${src})`,
                        // Chaque slide démarre son animation avec un délai décalé
                        // Ex : 3 images, 6s chacune → délais : 0s, 6s, 12s
                        animationDuration: `${cycleDuration}s`,
                        animationDelay: `${index * slideDuration}s`,
                    }}
                />
            ))}

            {/* Overlay sombre pour garantir la lisibilité du texte par-dessus */}
            <div className="slideshow__overlay" />
        </div>
    );
}

export default BackgroundSlideshow;
