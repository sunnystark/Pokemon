import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Routes } from "react-router-dom";
import PokemonSearch from "../../features/pokemon-names/pokemon-search";
import { useHasScrolled } from "./hooks";
import PokemonLogo  from "../../assets/pokemon.png"
import { pokemonDetailsRoute } from "../../pages/routes";
import "./style.scss";

export default function Header(props: { goBack: () => void }) {
  const scrolled = useHasScrolled();

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <img
          className="logo"
          src={PokemonLogo}
          width="10%"
          alt="PokeAPI"
        />
      <div className="header__search">
        <Routes>
          <Route
            path={pokemonDetailsRoute.path}
            element={
              <button
                title="Go back"
                className="header__back-button"
                onClick={props.goBack}
              >
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
              </button>
            }
          />
        </Routes>
        <PokemonSearch />
      </div>
    </header>
  );
}
