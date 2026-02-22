/**
 * Hero.jsx
 *
 * Layout plein écran inspiré portfolio designer :
 *  - Texte aligné à gauche, verticalement centré
 *  - Fond sombre avec formes géométriques décoratives
 *  - Pas de carte/bulle
 *
 * @param {Object} props
 * @param {import('../constants/profile').PROFILE} props.profile
 */
import SocialGrid from "./SocialGrid";

function Hero({ profile }) {
    const { name, title, bio, socials } = profile;

    return (
        <main className="hero">

            {/* ── Décors géométriques (losanges / rectangles inclinés) ── */}
            <div className="geo-shapes" aria-hidden="true">
                <div className="geo-shape geo-shape--1" />
                <div className="geo-shape geo-shape--2" />
                <div className="geo-shape geo-shape--3" />
            </div>

            {/* ── Contenu principal, aligné à gauche ── */}
            <div className="hero__content">

                {/* Nom */}
                <h1 className="hero__name">{name}</h1>

                {/* Titre avec préfixe terminal › */}
                <p className="hero__title">
                    <span className="hero__title-prefix" aria-hidden="true">&gt; </span>
                    {title}
                </p>

                {/* Bio */}
                <p className="hero__bio">{bio}</p>

                {/* Liens sociaux */}
                <SocialGrid socials={socials} />
            </div>
        </main>
    );
}

export default Hero;
