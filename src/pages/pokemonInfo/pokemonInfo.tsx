import "./pokemonInfo.css";
import bulbasur from "../../img/bulbasur.png";

export const PokemonInfo = () => {
  return (
    <article className="pokemon-info">
      <div className="pokemon-info__header">
        <div className="pokemon-info__image-container">
          <button className="back-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.0002 11.0001V13.0001H8.00016L13.5002 18.5001L12.0802 19.9201L4.16016 12.0001L12.0802 4.08008L13.5002 5.50008L8.00016 11.0001H20.0002Z"
                fill="black"
              />
            </svg>
          </button>
          <img
            src={bulbasur}
            className="pokemon-info__image"
            alt="Artwork of Bulbasaur"
          />
        </div>
      </div>

      <div className="pokemon-info__body">
        <div className="pokemon-info__identity">
          <h3 className="pokemon-info__name">Bulbasaur</h3>
          <div className="pokemon-info__id-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M10.0003 2.1665C11.0947 2.1665 12.1783 2.38205 13.1894 2.80084C14.2004 3.21963 15.1191 3.83346 15.8929 4.60728C16.6667 5.3811 17.2805 6.29976 17.6993 7.31081C18.1181 8.32186 18.3337 9.40549 18.3337 10.4998C18.3337 12.71 17.4557 14.8296 15.8929 16.3924C14.3301 17.9552 12.2105 18.8332 10.0003 18.8332C8.90598 18.8332 7.82234 18.6176 6.8113 18.1988C5.80025 17.78 4.88159 17.1662 4.10777 16.3924C2.54497 14.8296 1.66699 12.71 1.66699 10.4998C1.66699 8.2897 2.54497 6.17008 4.10777 4.60728C5.67057 3.04448 7.79019 2.1665 10.0003 2.1665ZM10.0003 3.83317C6.60033 3.83317 3.79199 6.37484 3.38366 9.6665H6.77533C7.14199 8.22484 8.45033 7.1665 10.0003 7.1665C11.5503 7.1665 12.8587 8.22484 13.2253 9.6665H16.617C16.2087 6.37484 13.4003 3.83317 10.0003 3.83317ZM10.0003 17.1665C13.4003 17.1665 16.2087 14.6248 16.617 11.3332H13.2253C12.8587 12.7748 11.5503 13.8332 10.0003 13.8332C8.45033 13.8332 7.14199 12.7748 6.77533 11.3332H3.38366C3.79199 14.6248 6.60033 17.1665 10.0003 17.1665ZM10.0003 8.83317C9.5583 8.83317 9.13438 9.00877 8.82182 9.32133C8.50925 9.63389 8.33366 10.0578 8.33366 10.4998C8.33366 10.9419 8.50925 11.3658 8.82182 11.6783C9.13438 11.9909 9.5583 12.1665 10.0003 12.1665C10.4424 12.1665 10.8663 11.9909 11.1788 11.6783C11.4914 11.3658 11.667 10.9419 11.667 10.4998C11.667 10.0578 11.4914 9.63389 11.1788 9.32133C10.8663 9.00877 10.4424 8.83317 10.0003 8.83317Z"
                fill="black"
              />
            </svg>
            <p className="pokemon-info__id">001</p>
          </div>
        </div>

        <div className="pokemon-info__section">
          <h4 className="pokemon-info__section-title">Types</h4>
          <div className="pokemon-info__pills-container">
            <span className="pokemon-info__pill type--grass">Grass</span>
            <span className="pokemon-info__pill type--poison">Poison</span>
          </div>
        </div>

        <div className="pokemon-info__section pokemon-info__section--horizontal">
          <div className="pokemon-info__attribute">
            <h4 className="pokemon-info__section-title">Weight</h4>
            <p className="pokemon-info__pill">6.9 kg</p>
          </div>
          <div className="pokemon-info__attribute">
            <h4 className="pokemon-info__section-title">Height</h4>
            <p className="pokemon-info__pill">0.7 m</p>
          </div>
        </div>

        <div className="pokemon-info__section">
          <h4 className="pokemon-info__section-title">Abilities</h4>
          <div className="pokemon-info__pills-container">
            <span className="pokemon-info__pill">Keen-eye</span>
            <span className="pokemon-info__pill">Infiltrator</span>
            <span className="pokemon-info__pill">Prankster</span>
          </div>
        </div>
        <div className="pokemon-info__section-stats">
          <div className="pokemon-info__stats">
            <h4 className="pokemon-info__section-title">HP</h4>
            <span className="pokemon-info__pill">60</span>
          </div>
          <div className="pokemon-info__stats">
            <h4 className="pokemon-info__section-title">ATK</h4>
            <span className="pokemon-info__pill">100</span>
          </div>
          <div className="pokemon-info__stats">
            <h4 className="pokemon-info__section-title">DEF</h4>
            <span className="pokemon-info__pill">6</span>
          </div>
          <div className="pokemon-info__stats">
            <h4 className="pokemon-info__section-title">Sp.Atk</h4>
            <span className="pokemon-info__pill">74</span>
          </div>
          <div className="pokemon-info__stats">
            <h4 className="pokemon-info__section-title">Sp.Def</h4>
            <span className="pokemon-info__pill">260</span>
          </div>
          <div className="pokemon-info__stats">
            <h4 className="pokemon-info__section-title">SPD</h4>
            <span className="pokemon-info__pill">12</span>
          </div>
        </div>
      </div>
    </article>
  );
};
