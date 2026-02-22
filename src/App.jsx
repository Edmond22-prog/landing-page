/**
 * App.jsx
 *
 * Point de composition principal.
 * Responsabilité unique : injecter les données du profil dans le composant Hero.
 * Toute la logique de présentation est dans Hero et ses enfants.
 */
import Hero from "./components/Hero";
import { PROFILE } from "./constants/profile";

function App() {
  return (
    // data-theme permet d'ajouter facilement un toggle light/dark plus tard
    <div data-theme="dark">
      <Hero profile={PROFILE} />
    </div>
  );
}

export default App;
