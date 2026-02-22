/**
 * SocialGrid.jsx — version horizontale pour layout plein écran.
 *
 * Les liens sont alignés en ligne (row), compacts,
 * adaptés au design sans carte.
 */
import SocialLink from "./SocialLink";

function SocialGrid({ socials }) {
    return (
        <nav className="social-grid" aria-label="Mes réseaux sociaux">
            {socials.map((social, index) => (
                <SocialLink
                    key={social.id}
                    label={social.label}
                    url={social.url}
                    icon={social.icon}
                    index={index}
                />
            ))}
        </nav>
    );
}

export default SocialGrid;
