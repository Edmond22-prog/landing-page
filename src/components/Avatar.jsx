/**
 * Avatar.jsx
 *
 * Affiche la photo de profil si fournie, sinon les initiales.
 * Pattern : composant pur et stateless, pas de logique métier ici.
 */

/**
 * @param {Object}  props
 * @param {string}  props.initials  - Ex: "TN" (fallback si pas de photo)
 * @param {string|null} props.src   - URL de la photo de profil (optionnel)
 * @param {string}  props.alt       - Texte alternatif pour l'image
 */
function Avatar({ initials, src = null, alt = "Photo de profil" }) {
    return (
        <div className="avatar-wrapper">
            {src ? (
                // Cas 1 : une vraie photo est fournie
                <img className="avatar-img" src={src} alt={alt} />
            ) : (
                // Cas 2 : pas de photo → on affiche les initiales dans un cercle
                <div className="avatar-initials" aria-label={alt}>
                    <span>{initials}</span>
                </div>
            )}

            {/* Halo décoratif animé derrière l'avatar */}
            <div className="avatar-glow" aria-hidden="true" />
        </div>
    );
}

export default Avatar;
