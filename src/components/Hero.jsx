/**
 * Hero.jsx
 *
 * Layout plein écran inspiré portfolio designer :
 *  - Slideshow d'images en arrière-plan (crossfade CSS)
 *  - Texte aligné à gauche, verticalement centré
 *  - Formes géométriques décoratives par-dessus le slideshow
 *  - Pas de carte/bulle
 *
 * @param {Object} props
 * @param {import('../constants/profile').PROFILE} props.profile
 */
import SocialGrid from "./SocialGrid";
import BackgroundSlideshow from "./BackgroundSlideshow";
import { BACKGROUND_IMAGES, SLIDE_DURATION } from "../constants/backgrounds";

function Hero({ profile }) {
    const { name, title, bio, socials } = profile;

    return (
        <main className="hero">

            {/* ── Slideshow en arrière-plan (couche la plus basse) ── */}
            <BackgroundSlideshow
                images={BACKGROUND_IMAGES}
                slideDuration={SLIDE_DURATION}
            />

            {/* ── Décors géométriques (par-dessus le slideshow) ── */}
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
