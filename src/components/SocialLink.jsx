/**
 * SocialLink.jsx
 *
 * Bouton pour un lien réseau social.
 * Conçu pour être réutilisable et indépendant de la source de données.
 *
 * @param {Object} props
 * @param {string} props.label    - Nom du réseau (ex: "GitHub")
 * @param {string} props.url      - URL de destination
 * @param {string} props.icon     - Icône SVG en string
 * @param {number} props.index    - Index dans la liste (utilisé pour le délai d'animation)
 */
function SocialLink({ label, url, icon, index = 0 }) {
    return (
        <a
            className="social-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer" // Bonne pratique sécurité pour les liens externes
            aria-label={`Visiter mon profil ${label}`}
            // Délai progressif pour l'animation d'apparition (stagger effect)
            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
        >
            {/* Icône SVG injectée en HTML — évite une dépendance à une lib d'icônes */}
            <span
                className="social-link__icon"
                dangerouslySetInnerHTML={{ __html: icon }}
                aria-hidden="true"
            />
            <span className="social-link__label">{label}</span>

            {/* Indicateur fléché visible au hover */}
            <span className="social-link__arrow" aria-hidden="true">↗</span>
        </a>
    );
}

export default SocialLink;
