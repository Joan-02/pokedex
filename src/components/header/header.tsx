import pokeball_header from "../../img/pokeball_header.svg";
import "./header.css";

export const Header = () => {
  const handleHeaderClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="header" onClick={handleHeaderClick}>
      <img className="pokeball-icon" src={pokeball_header} alt="Pokeball" />
    </header>
  );
};
